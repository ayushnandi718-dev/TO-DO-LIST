<div align="center">

<br/>

```
████████╗ █████╗ ███████╗██╗  ██╗███████╗██╗      ██████╗ ██╗    ██╗
╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝██╔════╝██║     ██╔═══██╗██║    ██║
   ██║   ███████║███████╗█████╔╝ █████╗  ██║     ██║   ██║██║ █╗ ██║
   ██║   ██╔══██║╚════██║██╔═██╗ ██╔══╝  ██║     ██║   ██║██║███╗██║
   ██║   ██║  ██║███████║██║  ██╗██║     ███████╗╚██████╔╝╚███╔███╔╝
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝
```

### *A dark, minimal, feature-rich productivity app — built with pure HTML, CSS & JS.*

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_App-f5a623?style=for-the-badge&logoColor=white)](https://ayushnandi718-dev.github.io/TO-DO-LIST/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![No Dependencies](https://img.shields.io/badge/Dependencies-Zero-22c55e?style=for-the-badge)](/)
[![License: MIT](https://img.shields.io/badge/License-MIT-818cf8?style=for-the-badge)](LICENSE)

<br/>

</div>

---

<br/>

## ✦ What is Taskflow?

**Taskflow** is a sleek, zero-dependency productivity app that helps you manage tasks the way they *deserve* to be managed — with priorities, categories, due dates, live search, drag-and-drop reordering, and a progress system that actually *feels* satisfying.

No frameworks. No build tools. No fluff.  
Just three files, a browser, and a workflow that works.

<br/>

---

<br/>

## ⚡ Features

| Feature | Description |
|---|---|
| ✅ **Task Management** | Add, edit, complete, and delete tasks with smooth animations |
| 🎯 **Priority Levels** | Mark tasks as High 🔴, Medium 🟡, or Low 🟢 — color-coded visually |
| 🏷️ **Categories** | Organize into Work 💼, Personal 🏠, Health ❤️, or Shopping 🛒 |
| 📅 **Due Dates** | Set deadlines; overdue tasks are auto-flagged in red |
| 🔍 **Live Search** | Instantly filter tasks as you type |
| 🗂️ **Filter Tabs** | Switch between All / Active / Done views |
| ↕️ **Sort Options** | Sort by date added, priority, due date, or A–Z |
| 📊 **Stats Dashboard** | Live counters for Total, Done, and Remaining tasks |
| 📈 **Progress Bar** | Animated completion bar that fills as you get things done |
| 🖱️ **Drag & Drop** | Reorder tasks by dragging them into position |
| 🗑️ **Bulk Clear** | One-click removal of all completed tasks |
| 💾 **Persistent Storage** | All data saved to `localStorage` — survives page refreshes |
| 📱 **Responsive Design** | Works seamlessly on mobile, tablet, and desktop |

<br/>

---

<br/>

## 🗂️ Project Structure

```
taskflow/
│
├── index.html       ← App markup & structure
├── style.css        ← Dark theme, animations, responsive layout
├── script.js        ← All app logic, state management, drag-and-drop
└── README.md        ← You are here
```

<br/>

---

<br/>

## 🚀 Getting Started

### Option 1 — Open directly in browser

```bash
# Clone the repository
git clone https://github.com/ayushnandi718-dev/TO-DO-LIST.git

# Navigate into the folder
cd TO-DO-LIST

# Open index.html in your browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2 — Use Live Server (VS Code)

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Done — hot reload included 🔥

### Option 3 — Just visit the live site

👉 **[ayushnandi718-dev.github.io/TO-DO-LIST](https://ayushnandi718-dev.github.io/TO-DO-LIST/)**

<br/>

---

<br/>

## 🎨 Design Philosophy

Taskflow was designed with one goal: **make task management feel premium**.

```
Dark background  →  Reduces eye strain during long sessions
Amber accents    →  Warm, focused energy — not clinical blue
Syne typeface    →  Geometric, bold headers that command attention
DM Sans body     →  Clean, readable, friendly
Priority bars    →  Instant visual hierarchy at a glance
Micro-animations →  Feedback that makes every action feel intentional
```

The color system uses semantic coding throughout — green for done, amber for in-progress, red for urgent/overdue. Your brain reads the board *before* your eyes do.

<br/>

---

<br/>

## 🧠 How It Works

```
┌─────────────────────────────────────────────┐
│              User Interaction               │
│  Add / Edit / Delete / Toggle / Drag        │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│           todos[] Array (in memory)         │
│  { id, text, category, priority, due, done }│
└──────────────────┬──────────────────────────┘
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
┌────────────────┐  ┌─────────────────────────┐
│  localStorage  │  │   render() → DOM update │
│  (persisted)   │  │   + updateStats()        │
└────────────────┘  └─────────────────────────┘
```

Every state change follows the same pattern:
1. Mutate the `todos[]` array
2. Call `save()` → writes to `localStorage`
3. Call `render()` → rebuilds the DOM from scratch

Simple. Predictable. Zero bugs from stale state.

<br/>

---

<br/>

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure |
| **CSS3** | Custom properties, flexbox, grid, animations |
| **Vanilla JavaScript (ES6+)** | App logic, DOM manipulation, drag-and-drop API |
| **localStorage API** | Client-side data persistence |
| **Google Fonts** | Syne (headings) + DM Sans (body) |
| **CSS Custom Properties** | Full dark theme with zero external CSS libraries |

<br/>

---

<br/>

## 📱 Responsive Breakpoints

```
Desktop  (> 680px)  →  Full layout, hover-reveal action buttons
Tablet   (≤ 680px)  →  Fluid grid, wrapping toolbar
Mobile   (≤ 480px)  →  Stacked form, full-width controls, visible actions
```

<br/>

---

<br/>

## 🔮 Roadmap

- [ ] 🌙 Light / Dark mode toggle  
- [ ] 📁 Custom categories  
- [ ] 🔔 Browser notifications for due tasks  
- [ ] 📤 Export tasks as JSON or CSV  
- [ ] 🔁 Recurring tasks  
- [ ] 🧩 Subtasks / checklists inside a task  
- [ ] ☁️ Cloud sync via Firebase  

<br/>

---

<br/>

## 🤝 Contributing

Contributions are welcome and appreciated.

```bash
# 1. Fork the repo
# 2. Create your feature branch
git checkout -b feature/your-feature-name

# 3. Commit your changes
git commit -m "feat: add your feature"

# 4. Push to your branch
git push origin feature/your-feature-name

# 5. Open a Pull Request
```

Please keep PRs focused — one feature or fix per PR.

<br/>

---

<br/>

## 📄 License

```
MIT License — free to use, modify, and distribute.
Just give credit where it's due. 🙏
```

<br/>

---

<br/>

<div align="center">

**Built with 🔥 by [Ayush Nandi](https://github.com/ayushnandi718-dev)**

*If this project helped you, consider leaving a ⭐ — it means a lot.*

<br/>

[![GitHub stars](https://img.shields.io/github/stars/ayushnandi718-dev/TO-DO-LIST?style=social)](https://github.com/ayushnandi718-dev/TO-DO-LIST)
[![GitHub forks](https://img.shields.io/github/forks/ayushnandi718-dev/TO-DO-LIST?style=social)](https://github.com/ayushnandi718-dev/TO-DO-LIST/fork)

</div>
