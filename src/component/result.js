import React, {useState}  from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { selecte } from '../stores/action';
import { type } from '@testing-library/user-event/dist/type';

 const Result =(props) => {
    const { repos } = props;
    console.log("Repos is :",repos.data);
    // const [names, setName ] =useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleClick = async (name) => {
            const result = name
            console.log("check",result)
            const action ={ type:"SELECT_CHANZGE", text:result};
            dispatch(selecte(action))
            navigate('/data')

    }  


    return (
    repos.length !== 0 ? (repos.data.map((item) => 
        <Card className='card'  key ={item.id} style={{ width: '18rem' }}> 
            <Card.Img className='my-2' variant="top" src={item.owner.avatar_url} /> 
                Project Name: <Card.Title> {item.name} </Card.Title>
            <Card.Subtitle className="my-2 text-muted">Project Id {item.id}</Card.Subtitle> 
            <Card.Body>
                <Card.Text>created time: &nbsp;{item.created_at}</Card.Text>
                <Card.Text>Pushed time: &nbsp;{item.pushed_at}</Card.Text>
                <Card.Text>watchers: &nbsp;{item.watchers} </Card.Text>
                <Card.Text>Forks: &nbsp;{item.forks} &nbsp; Forks_count:{item.forks_count} </Card.Text>
                <Card.Link onClick={() => handleClick(item.name)}  value ={item.name}>open_issues:&nbsp; {item.open_issues} open issues count: {item.open_issues_count}</Card.Link>
            </Card.Body>
            <Card.Link className='prj_link' href={item.html_url}>git Link </Card.Link>
            <a  className='prj_link' href={`${item.html_url}/projects`} > project details</a> 
        </Card>

            )) : (<p>no repos</p>)

    )
}


// const mapStateToProps = (state) => {
//     return {
//         names: state.names
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setName:(e) => {
//             console.log("changed-select", e.target.value)
//             const action ={ type:"SELECT_CHANZGE", text:e.target.value};
//             dispatch(action);
//         }
        
//     }
// }



// export default connect(mapStateToProps,mapDispatchToProps)(Result);
export default Result