import React, { useContext } from "react";
import { AppContext } from "../../context/context";
const TodoListItem = () => {
     const {appState, addTodo,completeTodo, removeTodo} = useContext(AppContext);
    
};
export default TodoListItem;
