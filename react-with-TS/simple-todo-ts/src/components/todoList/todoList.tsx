import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { todo } from "../../context/types";
const TodoList = () => {
    const {appState} = useContext(AppContext);
    const {todoList} = appState;
    return(
        <div>
            { todoList && todoList.map( (todoItem : todo , index : number) => {
                return <div key={todoItem.name +"-"+index}>{todoItem.name}</div>;
            } ) }
        </div>
    );
};
export default TodoList;