import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { todo } from "../../context/types";
import TodoListItem from './todoListItem';

const TodoList = () => {
    const {appState} = useContext(AppContext);
    const renderTodoList = () => {
        const {todoList} = appState;
        if(todoList.length > 0){
           return todoList.map((todoItem: todo) => {
              return (
                <TodoListItem key={`td-${todoItem.name}`} todoItem={todoItem} />
              );
            });
        }
        else{
           return <div> Empty List :( </div>
        }
    }
    return <div>{renderTodoList()}</div>;
};
export default TodoList;