import {useState} from 'react';
import axios from 'axios'
import Result from './result'
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import { search } from '../stores/action';

const SearchBar =(props) => {

    const dispatch = useDispatch();
    const [repos, SetRepos] =useState([])
    const handleClick = async () => {
        try{
            const result =await axios(`https://api.github.com/orgs/${props.inputValue}/repos`,{
                headers: {
                     'Authorization': `Bearer `,
                  },   
            })
            const action ={ type:"INPUT_CHANZGE", text:props.inputValue};
            console.log("action",props.inputChanged)
            dispatch(search(action)) 
            SetRepos(result)

        }catch (err) {
            console.log(err)
        }
    }  

    return(
        <div className='container '>
            <div className='search'> 
                <p className='title'>Git Search</p>
                <br /><input  type='text' placeholder='search' value ={props.inputValue}  onChange ={props.inputChanged}/>    
                <button className='btn btn-primary mx-3' onClick ={handleClick}> search </button>
            </div>

            <div className='result'>
            
                <Result repos ={repos} />
            </div>
        </div>
    )    
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChanged:(e) => {
            console.log("changed", e.target.value)
            const action ={ type:"INPUT_CHANZGE", text:e.target.value};
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);