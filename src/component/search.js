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


import { Card } from 'react-bootstrap';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, handleClick } from "../store/action";
import { getRepos } from "../store/selectors";
import { Link } from 'react-router-dom'; 
import { Data } from './data';
import { connect } from 'react-redux';
const SearchBar = () =>  {

    const dispatch = useDispatch();
    const repos = useSelector(getRepos);
    console.log(repos);

    useEffect( () => {dispatch(fetchRepos());}, [dispatch]);

    const handleClick = (select) => {
        return (dispatch) => {
         dispatch({type: 'text_action',select}) 
       }
    }


    return (
        <div className='container '>
        {repos.map((repos) => <Card className='card'  key ={repos.id} style={{ width: '18rem' }}> 
            <Card.Img className='my-2' variant="top" src={repos.owner.avatar_url} /> 
                Project Name: <Card.Title> {repos.name} </Card.Title>
            <Card.Subtitle className="my-2 text-muted">Project Id {repos.id}</Card.Subtitle> 
            <Card.Body>
                <Card.Text>created time: &nbsp;{repos.created_at}</Card.Text>
                <Card.Text>Pushed time: &nbsp;{repos.pushed_at}</Card.Text>
                <Card.Text>watchers: &nbsp;{repos.watchers} </Card.Text>
                <Card.Text>Forks: &nbsp;{repos.forks} &nbsp; Forks_count:{repos.forks_count} </Card.Text>
                <Link to={'/data'} params={{ name: `${repos.Name}` }}>open_issues:&nbsp; {repos.open_issues} open issues count: {repos.open_issues_count}</Link>
            </Card.Body>
            <Card.Link className='prj_link' href={repos.html_url}>git Link </Card.Link>
            <a  className='prj_link' href={`${repos.html_url}/projects`} > project details</a> 
        </Card>)}
           
        </div>
    );
  };




 

export default SearchBar;