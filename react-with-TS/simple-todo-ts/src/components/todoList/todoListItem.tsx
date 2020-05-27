import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { todo } from "../../context/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const TodoListItem = ( props : {todoItem : todo} ) => {
    const {completeTodo, removeTodo} = useContext(AppContext);
    const { todoItem } = props;
    return (
      <div
        className="card col-6 todoItemCard"
        style={{
          textDecoration: todoItem.isComplete ? "line-through" : "none",
        }}
      >
        <div onClick={() => completeTodo(todoItem)} className="todoName">{todoItem.name}</div>
        <FontAwesomeIcon
          className="removeTodo"
          onClick={() => removeTodo(todoItem.name)}
          icon={faTimes}
        />
      </div>
    );
};
export default TodoListItem;
