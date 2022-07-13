import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { projectId } from '../stores/action';

function Project() {
  const selectValue = useSelector((state) => state.selectValue)
  const orgValue =useSelector ((state) => state.inputValue)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("value", orgValue.text);
  useEffect(() => {
    fetchidApi();
  }, [selectValue]);


  const [Project, setProject] = useState([]);
  
  const fetchidApi = async () => {
    const data = await fetch(`https://api.github.com/repos/${orgValue.text}/${selectValue.text}/projects`,{
        headers: {
             'Authorization': `Bearer `,
          },   
    }
    );
    const itemdata = await data.json();
    setProject(itemdata);
  }

  const handleClick = async (name) => {
    const id = name
    console.log("check",id)
    const action ={ type:"ProjectID_CHANZGE", text:id};
    dispatch(projectId(action))
    navigate('/ProjectsDetails')

}
  return (

    <div>
      <h2 className=' mx-5 my-2'> Open Issues</h2>
      <div className='projects details'>
        {Project.map((item) =>
          <Card className='card my-5' key={item.id} style={{ width: '18rem' }}>
          projects Name: <Card.Link onClick={() => handleClick(item.id)}  value ={item.name}> {item.name} </Card.Link>

            
          </Card>
        )}
      </div>
      
    </div>

  )
}

export default Project;
