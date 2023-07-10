import { applyMiddleware, combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';



// const reducer = {
//     profilePage : profileReducer,
//     messagePage: messageReducer,
//     sidebar: sidebarReducer,
// }
// const store = configureStore({reducer})

const reducers = combineReducers({
    profilePage : profileReducer,
    messagePage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store


// переписать через конфигурСтор и slice попробовать