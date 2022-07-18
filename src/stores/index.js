import {configureStore } from '@reduxjs/toolkit'
import { detailsId } from './action';

const initialState ={
    inputValue : '',
    selectValue: '',
    idValue:'',
    projId:'',
    detailsId:''
};

const reducer = (state = initialState, action ) =>{
    console.log("reducer",action); 

    switch (action.type){
        case "INPUT_CHANZGE":
            console.log("input",action.type,action.text)
            return Object.assign({}, state, {inputValue: action.text})
        case "SELECT_CHANGE":
            console.log("change",action.type,action.text)
            return Object.assign({},state, {selectValue: action.text})   
        case "ProjectID_CHANZGE":
            console.log("changeId",action.type,action.text)
            return Object.assign({},state, {idValue: action.text}) 
        case "ProjectDet_CHANZGE":
            console.log("changeDet",action.type,action.text)
            return Object.assign({},state, {projId: action.text})
        case "DetailsId_CHANZGE":
            console.log("changeDet",action.type,action.text)
            return Object.assign({},state, {detailsId: action.text})    
        default:
            return state;
    }
}

const store =configureStore({reducer});

export default store;