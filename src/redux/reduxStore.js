import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sidebarReducer from './sidebarReducer';


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
})


const store = createStore(reducers)


export default store


// переписать через конфигурСтор и slice попробовать