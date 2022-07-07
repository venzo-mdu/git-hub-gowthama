import {configureStore } from '@reduxjs/toolkit'

const initialState ={
    inputValue : '',
    selectValue: ''
};

const reducer = (state = initialState, action ) =>{
    console.log("reducer",action); 

    switch (action.type){
        case "INPUT_CHANZGE":
            return Object.assign({}, state, {inputValue: action.text})
        case "SELECT_CHANGE":
            console.log("change",action.type,action.text)
            return Object.assign({},state, {selectValue: action.text})    
        default:
            return state;
    }
}

const store =configureStore({reducer});

export default store;