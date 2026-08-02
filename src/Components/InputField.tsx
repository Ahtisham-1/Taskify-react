interface TodoInterface {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

function InputField({ todo, setTodo }: TodoInterface) {
  return (
    <form>
      <label htmlFor="text">Enter your task</label>
      <br />
      <input
        type="text"
        placeholder="Enter your task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default InputField;
