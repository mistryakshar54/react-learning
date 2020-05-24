import { TodoActions, AppState } from "./types";

export default (state: AppState, action: TodoActions) => {
  switch (action.type) {
    case "ADD_TODO": {
      const todoList = [...state.todoList];
      todoList.push( action.payload.todoItem );
      return {
          ...state,
          todoList
        };
    }
    case "REMOVE_TODO": {
      return {
        ...state,
        todoList : state.todoList.filter( todoItem => todoItem.name !== action.payload.todoItemName ),
      };
    }
    case "COMPLETE_TODO": {
      const {todoItem} = action.payload;
      const newTodoList = state.todoList.map( currItem => {
          if( currItem.name ===  todoItem.name){
              currItem.isComplete = true;
          }
          return currItem;
      } );
      debugger;
      return {
        ...state,
        todoList: newTodoList,
      };
    }
    default : return state;
  }
};