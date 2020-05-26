import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { todo } from "../../context/types";

const TodoListItem = ( props : {todoItem : todo} ) => {
    const {completeTodo, removeTodo} = useContext(AppContext);
    const { todoItem } = props;
    return (
      <div
        style={{
          textDecoration: todoItem.isComplete ? "line-through" : 'none',
        }}
      >
        <div onClick={() => completeTodo(todoItem)}>{todoItem.name}</div>
        <label onClick={() => removeTodo(todoItem.name)}>X</label>
      </div>
    );
};
export default TodoListItem;
