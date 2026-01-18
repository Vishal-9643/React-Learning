import { useContext , createContext } from "react";

export const TodoContext = createContext({
     todos : [
          {
               id : 2,
               todo : "Learn React Context API",
               completed : false
          }
     ],
     addTodo  : (todo) => {},
     updateTodo : (id , todo) => {},
     deleteTodo : (id) => {},
     toggleComplete : (id) => {}
})

export const useTodo = () => {
     return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider