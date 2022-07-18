import React,{useState} from 'react'
import { Card } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { select } from '../stores/action';

const Result =(props) => {
    const { repos } = props;
    console.log("Repos is :",repos.data);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchRepos,setsearchRepos] = useState([]);

    const handleClick = async (name) => {
            const result = name;
            console.log("check",result)
            const action ={ type:"SELECT_CHANZGE", text:result};
            dispatch(select(action))
            navigate('/data')
    }  

    const github = async (name) => {
        const result = name
        console.log("check",result)
        const action ={ type:"SELECT_CHANZGE", text:result};
        dispatch(select(action))
        navigate('/projects')
} 

    const getFilterData=()=>{
        if (searchRepos.length >0){  
            return repos.data.filter(
            obj => obj.name.toLowerCase().includes(searchRepos.toLowerCase())
            ) 
        }
        return repos.data;
    }

    return (
    <>
        <label>Search Project : </label><input type='text' placeholder='search project' onChange={e => setsearchRepos(e.target.value)}/>
        <div> 
           {repos.length !== 0 ? (getFilterData().map((item) => 
                <Card className='card '  key ={item.id} style={{ width: '18rem' }}> 
                    <Card.Img className='my-2' variant="top" src={item.owner.avatar_url} /> 
                        Project Name: <Card.Title> {item.name} </Card.Title>
                    <Card.Subtitle className="my-2 text-muted">Project Id {item.id}</Card.Subtitle> 
                    <Card.Body>
                        <Card.Text>created time: &nbsp;{item.created_at}</Card.Text>
                        <Card.Text>Pushed time: &nbsp;{item.pushed_at}</Card.Text>
                        <Card.Text>watchers: &nbsp;{item.watchers} </Card.Text>
                        <Card.Text>Forks: &nbsp;{item.forks} &nbsp; Forks_count:{item.forks_count} </Card.Text>
                        <Card.Link className='prj_link' onClick={() => handleClick(item.name)}  value ={item.name}>open_issues:&nbsp; {item.open_issues} open issues count: {item.open_issues_count}</Card.Link>
                    </Card.Body>
                    <Card.Link className='prj_link' href={item.html_url}>git Link </Card.Link>
                    <Card.Link className='prj_link'  onClick={() => github(item.name)}> project details</Card.Link> 
                </Card>

            )) : (<p>no repos</p>)}
        </div>
    </>    
    )
}

export default Result;

