import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { projectDet } from '../stores/action';


function ProjectsDetails() {
  const idValue =useSelector ((state) => state.idValue)
  const projectId =useSelector ((state) => state.projId)

  console.log("ProjectsDetails", idValue.text);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchidApi();
  }, [idValue]);


  const [open_issues, setOpen_issues] = useState([]);
  const [projId, setProjId ] = useState('')
  const [issues, setIssues] = useState([]);


  const fetchidApi = async () => {
    const data = await fetch(`https://api.github.com/projects/${idValue.text}/columns`,{
        headers: {
             'Authorization': `Bearer `,
          },   
    }
    );
    const itemdata = await data.json();
    setOpen_issues(itemdata);
    // console.log("issues", itemdata);

  }
//   const github = async (name) => {
//     const result = name
//     console.log("check",result)
//     const action ={ type:"ProjectDet_CHANZGE", text:result};
//     dispatch(projectDet(action))
//     navigate('/Details')

// }

const todo = async () => {
  open_issues.map((item) => setProjId(item.id) )
  const action ={ type:"ProjectDet_CHANZGE", text:projId};
  dispatch(projectDet(action))

  const data = await fetch(`https://api.github.com/projects/columns/${projectId.text}/cards`,{
          headers: {
               'Authorization': `Bearer `,
            },   
      }
      );
      const itemdata = await data.json();
      setIssues(itemdata);
} 


  return (
    <div className=' todo'>
      <h2 className=' mx-5 my-2'> Open Issues</h2>
      <div className='open_issuse'>
        {open_issues.map((item) =>
          <Card className='card my-5' key={item.id} style={{ width: '18rem' }}>
          Issues Name: <Card.Title> {item.title} </Card.Title>
            <Card.Body>
              <Card.Text>Nmae: &nbsp;{item.name}</Card.Text>
              <Card.Link onClick={() => todo(item.id)}>Id: &nbsp;{item.id}  </Card.Link>
              <Card.Text>Created time: &nbsp;{item.created_at}</Card.Text>
            </Card.Body>
          </Card>
        )}
        </div>
        <div className='task'>
        {
          issues.map((item) => 
            <Card className='card my-5' key={item.id} style={{ width: '18rem' }}>
            Issues Name: <Card.Title> {item.note} </Card.Title>
             
            </Card>
          )
        }
      </div>
      
    </div>

  )
}

export default ProjectsDetails;