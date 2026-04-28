/* ============================
   TASKFLOW — script.js
   ============================ */

// ---- State ----
const saved = localStorage.getItem('taskflow_v2');
let todos = saved ? JSON.parse(saved) : [];
let filter = 'all';
let sort   = 'created';
let search = '';
let dragIdx = null;

// Priority sort order
const priOrder = { high: 0, medium: 1, low: 2 };

// ---- Persist ----
function save() {
  localStorage.setItem('taskflow_v2', JSON.stringify(todos));
}

// ---- Filter + Sort ----
function getFiltered() {
  let list = todos.filter(t => {
    if (search && !t.text.toLowerCase().includes(search.toLowerCase())) return false;
    if (filter === 'active') return !t.done;
    if (filter === 'done')   return t.done;
    return true;
  });

  list = list.slice().sort((a, b) => {
    if (sort === 'priority') return priOrder[a.priority] - priOrder[b.priority];
    if (sort === 'due') {
      if (!a.due && !b.due) return 0;
      if (!a.due) return 1;
      if (!b.due) return -1;
      return a.due.localeCompare(b.due);
    }
    if (sort === 'alpha') return a.text.localeCompare(b.text);
    return b.id - a.id; // default: newest first
  });

  return list;
}

// ---- Helpers ----
function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function isOverdue(due) {
  if (!due) return false;
  return due < new Date().toISOString().slice(0, 10);
}

function formatDate(due) {
  if (!due) return '';
  const d = new Date(due + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// ---- Stats ----
function updateStats() {
  const total = todos.length;
  const done  = todos.filter(t => t.done).length;

  document.getElementById('s-total').textContent = total;
  document.getElementById('s-done').textContent  = done;
  document.getElementById('s-left').textContent  = total - done;

  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById('progress').style.width = pct + '%';
  document.getElementById('bottom-info').textContent = `${done} of ${total} completed`;
}

// ---- Render ----
function render() {
  const listEl = document.getElementById('todo-list');
  const items  = getFiltered();
  listEl.innerHTML = '';

  if (!items.length) {
    listEl.innerHTML = `
      <div class="empty">
        <div class="empty-icon">📭</div>
        <div>No tasks here</div>
      </div>`;
    updateStats();
    return;
  }

  items.forEach(todo => {
    const realIdx = todos.indexOf(todo);
    const overdue = isOverdue(todo.due) && !todo.done;

    const li = document.createElement('div');
    li.className = 'todo-item';
    li.draggable  = true;
    li.dataset.idx = realIdx;

    li.innerHTML = `
      <div class="priority-bar ${todo.priority}"></div>
      <div class="checkbox ${todo.done ? 'checked' : ''}" data-check="${realIdx}"></div>
      <div class="todo-content">
        <div class="todo-text ${todo.done ? 'done' : ''}">${escHtml(todo.text)}</div>
        <div class="todo-meta">
          <span class="tag ${todo.category}">${todo.category}</span>
          <span class="priority-badge ${todo.priority}">${todo.priority}</span>
          ${todo.due
            ? `<span class="due-date ${overdue ? 'overdue' : ''}">
                 📅 ${formatDate(todo.due)}${overdue ? ' (overdue)' : ''}
               </span>`
            : ''}
        </div>
      </div>
      <div class="todo-actions">
        <button class="action-btn" data-edit="${realIdx}">Edit</button>
        <button class="action-btn del" data-del="${realIdx}">Delete</button>
      </div>`;

    // Drag-and-drop events
    li.addEventListener('dragstart', () => {
      dragIdx = realIdx;
      li.classList.add('dragging');
    });
    li.addEventListener('dragend', () => {
      li.classList.remove('dragging');
    });
    li.addEventListener('dragover', e => {
      e.preventDefault();
      li.classList.add('drag-over');
    });
    li.addEventListener('dragleave', () => {
      li.classList.remove('drag-over');
    });
    li.addEventListener('drop', e => {
      e.preventDefault();
      li.classList.remove('drag-over');
      if (dragIdx !== null && dragIdx !== realIdx) {
        const item = todos.splice(dragIdx, 1)[0];
        todos.splice(realIdx, 0, item);
        save();
        render();
      }
    });

    listEl.appendChild(li);
  });

  // Checkbox toggle
  listEl.querySelectorAll('[data-check]').forEach(el => {
    el.addEventListener('click', () => {
      const i = +el.dataset.check;
      todos[i].done = !todos[i].done;
      save();
      render();
    });
  });

  // Delete
  listEl.querySelectorAll('[data-del]').forEach(el => {
    el.addEventListener('click', () => {
      todos.splice(+el.dataset.del, 1);
      save();
      render();
    });
  });

  // Edit (inline prompt)
  listEl.querySelectorAll('[data-edit]').forEach(el => {
    el.addEventListener('click', () => {
      const i = +el.dataset.edit;
      const newText = prompt('Edit task:', todos[i].text);
      if (newText && newText.trim()) {
        todos[i].text = newText.trim();
        save();
        render();
      }
    });
  });

  updateStats();
}

// ---- Add Task ----
function addTodo() {
  const text = document.getElementById('task-input').value.trim();
  if (!text) return;

  todos.unshift({
    id:       Date.now(),
    text,
    category: document.getElementById('cat-sel').value,
    priority: document.getElementById('pri-sel').value,
    due:      document.getElementById('due-input').value,
    done:     false
  });

  document.getElementById('task-input').value = '';
  document.getElementById('due-input').value  = '';

  save();
  render();

  // Slide-in animation for the first item
  const first = document.querySelector('.todo-item');
  if (first) first.classList.add('new-item');
}

// ---- Event Listeners ----

// Add button & Enter key
document.getElementById('add-btn').addEventListener('click', addTodo);
document.getElementById('task-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') addTodo();
});

// Filter tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    filter = tab.dataset.filter;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    render();
  });
});

// Search
document.getElementById('search-input').addEventListener('input', e => {
  search = e.target.value;
  render();
});

// Sort
document.getElementById('sort-sel').addEventListener('change', e => {
  sort = e.target.value;
  render();
});

// Clear completed
document.getElementById('clear-btn').addEventListener('click', () => {
  todos = todos.filter(t => !t.done);
  save();
  render();
});

// ---- Date in Header ----
const days   = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const now = new Date();
document.getElementById('today-date').textContent =
  `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;

// ---- Initial Render ----
render();
