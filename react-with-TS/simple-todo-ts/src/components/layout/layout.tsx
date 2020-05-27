import React from 'react';
import TodoList from '../todoList/todoList';
import TodoInput from "../totoInput/todoInput";
import './layout.scss';

const Layout = () => {
    return (
        <div className="appLayout col-12">
          <h1 className="headertext col-12">Todo List</h1>
          <TodoInput />
          <TodoList />
        </div>
    );
}

export default Layout;
