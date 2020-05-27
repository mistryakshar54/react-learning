import React, { useContext , useState } from "react";
import { AppContext } from "../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoInput = () => {
    const {addTodo} = useContext(AppContext);
    const [ todoName , addTodoName ] = useState('');
    const handleAddTodo = () =>
    {
        addTodo({ name: todoName, isComplete: false });
        addTodoName('');
    }
    return (
      <div className="col-12 todoInputComponent">
        <input
          className="todoInput col-4"
          value={todoName}
          onChange={(e) => addTodoName(e.target.value)}
        />
        <div onClick={handleAddTodo} className="submitButton">
          <FontAwesomeIcon className="addIcon" icon={faPlus} />
        </div>
      </div>
    );
};
export default TodoInput;
