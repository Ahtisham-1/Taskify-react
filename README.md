# ✅ React TypeScript Todo App

A simple and clean Todo application built with **React** and **TypeScript**, supporting task creation, editing, deletion, and completion tracking.

---

## 🚀 Features

- **Add Todos** — Type a task and add it to your list
- **Edit Todos** — Inline editing for existing tasks
- **Delete Todos** — Remove tasks you no longer need
- **Mark as Done** — Strike through completed tasks
- **Type-safe** — Fully typed with TypeScript

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React | UI framework |
| TypeScript | Type safety |
| React Icons | Edit / Delete / Done icons |
| CSS | Styling |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── SingleTodo.tsx     # Individual todo item (edit, delete, done)
│   └── TodoList.tsx       # Renders the list of todos
├── Model.ts               # TodoModel type definition
├── App.tsx                # Root component, holds state
└── index.tsx              # Entry point
```

---

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Ahtisham-1/react-ts-todo.git

# Navigate into the project
cd react-ts-todo

# Install dependencies
npm install
```

### Running the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

---

## 🧩 Data Model

```ts
// Model.ts
export interface TodoModel {
  id: number;
  todo: string;
  isDone: boolean;
}
```

---

## 🖊️ Usage

1. Type a task into the input field and press **Enter** or click **Add**
2. Click the ✏️ **edit icon** to modify a task inline, then press **Enter** to save
3. Click the 🗑️ **delete icon** to remove a task
4. Click the ✔️ **done icon** to toggle a task as completed (strikes it through)

> **Note:** Completed tasks cannot be edited — the edit icon is disabled when a task is marked as done.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).