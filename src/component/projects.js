import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";



function Project() {
  const selectValue = useSelector((state) => state.selectValue)
  const orgValue =useSelector ((state) => state.inputValue)

  console.log("value", orgValue.text);
  useEffect(() => {
    fetchidApi();
  }, [selectValue]);


  const [Project, setProject] = useState([]);
  const [column, setColumn] = useState([]);
  
  const fetchidApi = async () => {
    const data = await fetch(`https://api.github.com/repos/${orgValue.text}/${selectValue.text}/projects`,{
        headers: {
             'Authorization': `Bearer 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`,
          },   
    }
    );
    const itemdata = await data.json();
    setProject(itemdata);
  }

  const fetchidColumn = async () => {
    const data = await fetch(`https://api.github.com/projects/14580388/columns`,{
        headers: {
             'Authorization': `Bearer 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`,
          },   
    }
    );
    const itemdata = await data.json();
    setColumn(itemdata);
    { console.log("test",column)}

  }

  return (

    <div>
      <h2 className=' mx-5 my-2'> Open Issues</h2>
      <div className='projects details'>
        {Project.map((item) =>
          <Card className='card my-5' key={item.id} style={{ width: '18rem' }}>
          projects Name: <Card.Title> {item.name} </Card.Title>
          projects Name: <Card.Title> {item.html_url} </Card.Title>

            
          </Card>
        )}
      </div>
      
    </div>

  )
}

export default Project;
