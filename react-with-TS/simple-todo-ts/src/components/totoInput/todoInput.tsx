import React, { useContext , useState } from "react";
import { AppContext } from "../../context/context";

const TodoInput = () => {
    const {addTodo} = useContext(AppContext);
    const [ todoName , addTodoName ] = useState('');
    const handleAddTodo = () =>
    {
        addTodo({ name: todoName, isComplete: false });
        addTodoName('');
    }
    return (
      <div>
        <input value={todoName} onChange={(e) => addTodoName(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    );
};
export default TodoInput;
