export type todo = {
  name: string;
  isComplete: boolean;
};

export type AppState = {
  todoList: todo[];
  theme: "dark" | "light";
}


export type AddAction = {
    type : 'ADD_TODO',
    payload : { 
        todoItem : todo
    }
}
export type CompleteAction = {
    type : 'COMPLETE_TODO',
    payload : { 
        todoItem : todo
    }
}
export type RemoveAction = {
  type: "REMOVE_TODO";
  payload: {
    todoItemName: string;
  };
};

export type TodoActions = AddAction | CompleteAction | RemoveAction;