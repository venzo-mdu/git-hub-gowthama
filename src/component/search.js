import {useState} from 'react';
import axios from 'axios'
import Result from './result'
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import { search, select } from '../stores/action';
const SearchBar =(props) => {
    const dispatch = useDispatch();

    const [repos, SetRepos] =useState([])
    const handleClick = async () => {
        try{
            const result =await axios(`https://api.github.com/orgs/${props.inputValue}/repos`,{
                headers: {
                     'Authorization': `Bearer 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`,
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



// import {useState,useEffect} from 'react';
// import axios from 'axios'
// import Result from './result'

// const SearchBar =() => {
//     const [searchInput, setSearchInput ] =useState("")
//     const [repos, SetRepos] =useState([])

//     const handleChange =(e) => {
//         setSearchInput(e.target.value)
//         localStorage.setrepos('searchInput',e.target.value)

//     }
//     const handleClick = async () => {
//         try{
//             const result =await axios(`https://api.github.com/orgs/${searchInput}/repos`) 
//             // const result =await axios(
//             // {
//             //     method: 'get',
//             //     url :`https://api.github.com/orgs/${searchInput}/repos`, 
//             //     header:{
//             //         Authorization: `token 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`
//             //     }
//             // }) 

//             SetRepos(result)
//             localStorage.setrepos('lists',result)

//         }catch (err) {
//             console.log(err)
//         }
//     }

//     // console.log(repos);


//     useEffect(() => {
//         const search= localStorage.getrepos('searchInput')
//         const list =localStorage.getrepos('lists')
//         return () => {   
//             setSearchInput(search)
//             // SetRepos(list)
//         };
//     }, []);

//     return(
//         <div className='container '>
//             <div className='search'> 
//                 <p className='title'>Git Search</p>
//                 <br /><input  type='text' placeholder='search' value ={searchInput} onChange ={ handleChange} />
//                 <button className='btn btn-primary mx-3' onClick ={handleClick}> search </button>
//             </div>
//             <div className='result'>
//                 <Result repos ={repos} />
//             </div>
//         </div>
//     )    

// }
// export default SearchBar;


// import { Card } from 'react-bootstrap';

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchRepos, handleClick } from "../store/action";
// import { getRepos } from "../store/selectors";
// import { Link } from 'react-router-dom'; 
// import { Data } from './data';
// import { connect } from 'react-redux';
// const SearchBar = (props) =>  {

//     const dispatch = useDispatch();
//     const repos = useSelector(getRepos);
//     console.log(repos);

//     useEffect( () => {dispatch(fetchRepos());}, [dispatch]);



//     return (
//         <div className='container '>
//         {repos.map((repos) => <Card className='card'  key ={repos.id} style={{ width: '18rem' }}> 
//             <Card.Img className='my-2' variant="top" src={repos.owner.avatar_url} /> 
//                 Project Name: <Card.Title> {repos.name} </Card.Title>
//             <Card.Subtitle className="my-2 text-muted">Project Id {repos.id}</Card.Subtitle> 
//             <Card.Body>
//                 <Card.Text>created time: &nbsp;{repos.created_at}</Card.Text>
//                 <Card.Text>Pushed time: &nbsp;{repos.pushed_at}</Card.Text>
//                 <Card.Text>watchers: &nbsp;{repos.watchers} </Card.Text>
//                 <Card.Text>Forks: &nbsp;{repos.forks} &nbsp; Forks_count:{repos.forks_count} </Card.Text>
//                 <Link to={'/data'} value ={repos.name} >open_issues:&nbsp; {repos.open_issues} open issues count: {repos.open_issues_count}</Link>
//             </Card.Body>
//             <Card.Link className='prj_link' href={repos.html_url}>git Link </Card.Link>
//             <a  className='prj_link' href={`${repos.html_url}/projects`} > project details</a> 
//         </Card>)}
           
//         </div>
//     );
//   };


// const mapStateToProps = (state) =>{
//     return{
        
//     }
// }


 

// export default SearchBar;




