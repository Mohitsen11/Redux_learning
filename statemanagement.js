// Learning createStore redux function
import { createStore } from 'redux';

function TodoReducer(state , action){

    if(action.type == 'add_todo'){
        let nextId = state.length + 1;
        return ([...state , { id : nextId , text : action.payload.todoText, isFinished : false}])
    } else if( action.type == 'edit_todo'){
        const newTodo = state.map((todo) => {
            if(todo.id == action.payload.id){
                todo.text = action.payload.todoText
            }
            return todo;
        })

        return newTodo;
    } else if(action.type == 'delete_todo'){
        const newTodo = state.filter((todo) => todo.id != action.payload.id);
  
        return newTodo;
    } else if(action.type == 'finish_todo'){
        const newTodo = state.map((todo) => {
            if(todo.id == action.payload.id){
                todo.isFinished = action.payload.isFinished
            }

            return todo;
        });

       return newTodo;
    }

    return state;
}

const store = createStore(TodoReducer , [{id : 1 , text: 'todo 1' , isFinished : false}]);

console.log(store);

// getState ( to get the state of our application from common document)
console.log(store.getState());

// subscribe ( callback function inside this method gets executed when a dispatch of actions occurs)
store.subscribe(() => console.log(store.getState()));

//dispatch ( to change the state of the application or to update something )
store.dispatch({type : 'add_todo' , payload : {todoText : 'todo 2'}});

