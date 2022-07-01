import React from 'react'
import { Card,  } from 'react-bootstrap';
const Result =(props) => {
    const { repos } = props;
    console.log("Repos is :",repos.data);

  
              
    return (
                repos.length !== 0 ? (repos.data.map((item) => 
             <Card className='card'  key ={item.id} style={{ width: '18rem' }}>
                    
                     <Card.Img className='my-2' variant="top" src={item.owner.avatar_url} /> 
                     Project Name: <Card.Title> {item.name} </Card.Title>
                     <Card.Subtitle className="my-2 text-muted">Project Id {item.id}</Card.Subtitle> 
                     <Card.Body>
                        <Card.Text>created time: &nbsp;{item.created_at}</Card.Text>
                        <Card.Text>Pushed time: &nbsp;{item.pushed_at}</Card.Text>
                        <Card.Text>watchers: &nbsp;{item.watchers}</Card.Text>
                        <Card.Text> open issues count: {item.open_issues_count}</Card.Text>

                    </Card.Body>
                    <Card.Link className='prj_link' href={item.html_url}>git Link </Card.Link>
            
                       <a  className='prj_link' href={`${item.html_url}/projects`} > project details</a> 
                </Card>
        )) : (<p>no repos</p>)

    )
}

export default Result;