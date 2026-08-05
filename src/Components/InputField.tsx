interface TodoInterface {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

function InputField({ todo, setTodo, handleAdd }: TodoInterface) {
  return (
    <form className="todo-form" onSubmit={handleAdd}>
      <label htmlFor="text">Enter your task</label>
      <div className="input-row">
        <input
          id="text"
          className="todo-input"
          type="text"
          placeholder="Enter your task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </div>
    </form>
  );
}

export default InputField;
