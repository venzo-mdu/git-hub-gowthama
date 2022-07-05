import { Card } from 'react-bootstrap';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos } from "../store/action";
import { getRepos } from "../store/selectors";
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const dispatch = useDispatch();
    const repos = useSelector(getRepos);
    
    useEffect( () => {dispatch(fetchRepos());}, [dispatch]);

    return (
        <div className='container '>
        {repos.map((repos) =>
         <Card className='card'  key ={repos.id} style={{ width: '18rem' }}> 
            <Card.Body>
                <Card.Text>issues: &nbsp;{repos.issues_url}&nbsp; Forks_count:{repos.forks_count} </Card.Text>
                {console.log(repos.html_url.map((list) => {
                    <div>
                        {list.issues_url}
                    </div>
                })}
            </Card.Body>
        </Card>)}            
        <Link to={'/data'}>open_issues:&nbsp; {repos.open_issues} open issues count: {repos.open_issues_count}</Link>

        </div>
    );
  };
  
  export default SearchBar;