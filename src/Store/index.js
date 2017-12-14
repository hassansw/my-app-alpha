import React, { Component } from 'react'
import { createStore, combineReducers  } from 'redux'
import thunk  from 'redux-thunk'
import UserLogsReducer from './Reducers/UserLogsReducer'
import { applyMiddleware } from 'redux';


let middleware = applyMiddleware(thunk)
let store = createStore(UserLogsReducer, middleware)


Store.subscribe( ()=>{
    console.log(store.getState);
})

export default store
