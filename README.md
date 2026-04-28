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

# 🚀 Taskflow — A Minimal Yet Powerful Productivity Engine

<div align="center">

**Fast. Focused. Zero dependencies.**

A modern task management web app built using pure HTML, CSS, and JavaScript — designed for speed, clarity, and real-world usability.

<br/>

🌐 **Live Demo:**
👉 [https://ayushnandi718-dev.github.io/TO-DO-LIST/](https://ayushnandi718-dev.github.io/TO-DO-LIST/)

</div>

---

## ✦ Vision

Most productivity tools try to do everything… and end up slowing you down.

**Taskflow flips that idea.**

> Build less. Execute better.

This project is an experiment in **performance-first frontend engineering** — proving that you can deliver a premium experience without frameworks, libraries, or complexity.

---

## ⚡ Feature Breakdown

### 🧠 Core Task Engine

* Full CRUD operations (Create / Update / Delete / Complete)
* Instant UI updates with zero lag
* Smooth micro-interactions

---

### 🎯 Priority Intelligence

| Level     | Meaning   | UI Signal           |
| --------- | --------- | ------------------- |
| 🔴 High   | Critical  | Strong visual alert |
| 🟡 Medium | Important | Balanced highlight  |
| 🟢 Low    | Optional  | Minimal emphasis    |

→ Enables **decision-making at a glance**

---

### 🏷️ Structured Organization

* Predefined categories:

  * 💼 Work
  * 🏠 Personal
  * ❤️ Health
  * 🛒 Shopping

→ Keeps tasks context-aware and grouped

---

### 📅 Smart Deadline System

* Assign due dates to tasks
* Automatic overdue detection
* Visual urgency indicators

---

### 🔍 Real-Time Search Engine

* Instant filtering while typing
* No debounce, no delay — pure in-memory operations

---

### 🗂️ State Filtering

* All / Active / Completed views
* Enables workflow segmentation

---

### ↕️ Sorting System

* Sort by:

  * Creation time
  * Priority
  * Due date
  * Alphabetical

---

### 📊 Productivity Metrics

* Live counters:

  * Total tasks
  * Completed
  * Remaining

---

### 📈 Progress Visualization

* Dynamic progress bar
* Updates instantly as tasks are completed

→ Reinforces consistency and motivation

---

### 🖱️ Drag & Drop Engine

* Native HTML5 Drag API
* Reorder tasks intuitively

---

### 🗑️ Bulk Operations

* One-click removal of completed tasks

---

### 💾 Persistence Layer

* Built using `localStorage`
* Fully client-side
* No data loss on refresh

---

### 📱 Responsive UI System

| Device  | Behavior                         |
| ------- | -------------------------------- |
| Desktop | Full layout with hover actions   |
| Tablet  | Adaptive grid                    |
| Mobile  | Stacked controls, touch-friendly |

---

## 🧱 System Architecture

```
User Interaction
      ↓
Update todos[] (State Layer)
      ↓
Persist → localStorage
      ↓
Render → DOM Reconstruction
      ↓
Update Stats & UI
```

### 💡 Design Principle:

* Single Source of Truth → `todos[]`
* No partial DOM patching
* Full re-render ensures consistency

---

## ⚙️ Tech Stack

| Layer     | Technology                       |
| --------- | -------------------------------- |
| Structure | HTML5                            |
| Styling   | CSS3 (Flexbox, Grid, Animations) |
| Logic     | Vanilla JavaScript (ES6+)        |
| Storage   | localStorage API                 |

> **Zero dependencies. Zero build tools. Zero overhead.**

---

## 🎨 UI/UX Strategy

### Design Goals:

* Reduce cognitive load
* Increase task visibility
* Improve interaction feedback

### Implementation:

* 🌙 Dark theme → reduces eye strain
* 🎯 Color-coded priorities → faster scanning
* ⚡ Micro-animations → responsive feel
* 📐 Clean spacing & hierarchy → readability

---

## 🧠 Engineering Decisions

### ✔️ Why Vanilla JS?

* Full control over logic
* No abstraction overhead
* Better performance for small-scale apps

---

### ✔️ Why Full Re-render?

* Avoids stale UI bugs
* Keeps logic predictable
* Easier debugging

---

### ✔️ Why localStorage?

* Instant persistence
* No backend complexity
* Offline-first capability

---

## 🚧 Challenges & Solutions

### 1. State Consistency

**Problem:** UI desync after multiple actions
**Solution:** Always rebuild DOM from state

---

### 2. Drag & Drop Ordering

**Problem:** Maintaining correct index
**Solution:** Update array order on drop event

---

### 3. Performance Without Frameworks

**Problem:** Handling everything manually
**Solution:** Optimized loops + minimal DOM operations

---

## 📊 Performance & Impact

* ⚡ Instant load time (no libraries)
* 🧠 Faster decision-making via visual hierarchy
* 📱 Seamless cross-device experience
* 🔁 Smooth interaction loop increases retention

---

## 🔮 Roadmap

* 🌙 Light/Dark theme toggle
* 📁 Custom categories
* 🔔 Notification system
* 📤 Export (JSON / CSV)
* 🔁 Recurring tasks
* 🧩 Subtasks support
* ☁️ Cloud sync (Firebase)

---

## 🚀 Getting Started

```bash
git clone https://github.com/ayushnandi718-dev/TO-DO-LIST.git
cd TO-DO-LIST
open index.html
```

Or use **Live Server** in VS Code for hot reload.

---

## 🤝 Contribution Guide

```bash
# Create a branch
git checkout -b feature/your-feature

# Commit changes
git commit -m "feat: add feature"

# Push
git push origin feature/your-feature
```

Open a Pull Request 🚀

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 🧑‍💻 Author

**Ayush Nandi**
Frontend Developer • Creative Technologist

---

## ⭐ Final Thought

> Good tools don’t just organize tasks —
> they reduce friction between intention and action.

**Taskflow is built to do exactly that.**

---

### 🔥 If you made it this far…

Drop a ⭐ on the repo — it genuinely helps visibility.
