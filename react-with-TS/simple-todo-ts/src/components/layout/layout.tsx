import React from 'react';
import TodoList from '../todoList/todoList';
import TodoInput from "../totoInput/todoInput";
const Layout = () => {
    return (
        <>
        <div>Layout Component Comes Here</div>
        <TodoInput />
        <TodoList />
      </>
    );
}

export default Layout;
