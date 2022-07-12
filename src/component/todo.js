import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { projectDet } from '../stores/action';


function ProjectsDetails() {
  const idValue =useSelector ((state) => state.idValue)
  console.log("ProjectsDetails", idValue.text);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchidApi();
  }, [idValue]);


  const [open_issues, setOpen_issues] = useState([]);

  const fetchidApi = async () => {
    const data = await fetch(`https://api.github.com/projects/${idValue.text}/columns`,{
        headers: {
             'Authorization': `Bearer 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`,
          },   
    }
    );
    const itemdata = await data.json();
    setOpen_issues(itemdata);
    // console.log("issues", itemdata);

  }
  const github = async (name) => {
    const result = name
    console.log("check",result)
    const action ={ type:"ProjectDet_CHANZGE", text:result};
    dispatch(projectDet(action))
    navigate('/Details')

} 
  return (
    <div>
      <h2 className=' mx-5 my-2'> Open Issues</h2>
      <div className='open_issuse'>
        {open_issues.map((item) =>
          <Card className='card my-5' key={item.id} style={{ width: '18rem' }}>
          Issues Name: <Card.Title> {item.title} </Card.Title>
            <Card.Body>
              <Card.Text>Nmae: &nbsp;{item.name}</Card.Text>
              <Card.Link onClick={() => github(item.id)}>Id: &nbsp;{item.id}  </Card.Link>
              <Card.Text>Created time: &nbsp;{item.created_at}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
      
    </div>

  )
}

export default ProjectsDetails;