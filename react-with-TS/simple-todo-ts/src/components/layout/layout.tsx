import React, { useContext } from 'react';

import {AppContext} from '../../context/context';
const Layout = () => {
    const {appState, addTodo,completeTodo, removeTodo} = useContext(AppContext);
    console.log("appState", appState);
    return (
        <>
        <button onClick={ () => {addTodo({ name: "ABC", isComplete: false })} }>ABc</button>
        <button onClick={ () => {addTodo({ name: "DEF", isComplete: false })} }>DEF</button>
        <button onClick={ () => {completeTodo({ name: "DEF", isComplete: true })} }>DEF</button>
        <button onClick={ () => {removeTodo('DEF');} }>Click</button>
        <div>Layout Component Comes Here</div>
        <div>Input Comes Here</div>
        <div>List Comes Here</div>
      </>
    );
}

export default Layout;
