// Learning createStore and bindActionCreators redux function
import { bindActionCreators, combineReducers, createStore } from 'redux';

const ADD_TODO = 'add_todo';
const EDIT_TODO = 'edit_todo';
const DELETE_TODO = 'delete_todo';
const FINISH_TODO = 'finish_todo';

const ADD_USER = 'add_user';
function TodoReducer(state = [], action){

    if(action.type == ADD_TODO){
        let nextId = state.length + 1;
        return ([...state , { id : nextId , text : action.payload.todoText, isFinished : false}])
    } else if( action.type == EDIT_TODO){
        const newTodo = state.map((todo) => {
            if(todo.id == action.payload.id){
                todo.text = action.payload.todoText
            }
            return todo;
        })

        return newTodo;
    } else if(action.type == DELETE_TODO){
        const newTodo = state.filter((todo) => todo.id != action.payload.id);
  
        return newTodo;
    } else if(action.type == FINISH_TODO){
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

function UserReducer(state = [], action){
    if(action.type == ADD_USER){
        let nextId = state.length + 1;
        return [...state , {id : nextId , user : action.payload.user}];
    }

    return state;
}

const reducer = combineReducers({users : UserReducer , todos : TodoReducer})
const store = createStore(reducer);

console.log(store);

// getState ( to get the state of our application from common document)
console.log(store.getState());

// subscribe ( callback function inside this method gets executed when a dispatch of actions occurs)
store.subscribe(() => console.log(store.getState()));

// create action creators
const addTodo = (todoText) => ({type : ADD_TODO , payload : {todoText : todoText}});
const deleteTodo = (id) => ({type : DELETE_TODO , payload : {id : id}});
const addUser = (user) => ({type : ADD_USER , payload : {user : user}})

//dispatch ( to change the state of the application or to update something )
store.dispatch(addTodo('todo 2'));
store.dispatch(addTodo('todo 3'));
store .dispatch(deleteTodo(2));

// we have created action creators its good but we have to still write store.dispatch to dispatch an action
// so the third function (bindActionCreators) gives a solution by binding the action creators with dispatch method

const action = bindActionCreators({addTodo , deleteTodo , addUser} , store.dispatch);

action.addTodo('todo 5')
action.addTodo('todo 6');
action.addTodo('todo 7');
action.deleteTodo(4);
action.addUser('mohit');