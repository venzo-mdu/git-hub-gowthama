import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Details() {
  const detValue =useSelector ((state) => state.detailsId)

  console.log(detValue)
    useEffect(() => {
      fetchidId();
    }, [detValue]);
    
    const [issues, setissues] = useState([]);
  
    const fetchidId = async () => {
      const data = await fetch(`https://api.github.com/projects/columns/${detValue.text}/cards`,{
          headers: {
               'Authorization': `Bearer `,
            },   
      }
      );
      const itemdata = await data.json();
      setissues(itemdata);
    }
    
    return (
      <div>
      {console.log("length",isNaN(issues.length!==0))}
        <h2 className=' mx-5 my-2'>Details</h2>
        <div className='open_issuse'>
          {issues.length !== 0 ? issues.map((item) =>
            <Card className='card my-5' key={item.id} style={{ width: '18rem' }}>
             Name: <Card.Title> {item.note} </Card.Title>
            </Card>
          ): (<p>no Details</p>)}
        </div>
      </div>
    )
  }

export default Details;