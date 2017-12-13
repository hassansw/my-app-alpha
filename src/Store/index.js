import React, { Component } from 'react'
import { createStore, combineReducers  } from 'redux'
import thunk  from 'redux-thunk'
import Reducer from './Reducer'
import { applyMiddleware } from 'redux';


let middleware = applyMiddleware(thunk)
let store = createStore(Reducer, middleware)


Store.subscribe( ()=>{
    console.log(store.getState);
})

export default store
