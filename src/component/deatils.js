import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";



function Details() {
    const idValue =useSelector ((state) => state.projId)
    console.log("Details", idValue.text);

    useEffect(() => {
      fetchidApi();
    }, [idValue]);
  
  
    const [open_issues, setOpen_issues] = useState([]);
  
    const fetchidApi = async () => {
      const data = await fetch(`https://api.github.com/projects/columns/${idValue.text}/cards`,{
          headers: {
               'Authorization': `Bearer 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`,
            },   
      }
      );
      const itemdata = await data.json();
      setOpen_issues(itemdata);
      // console.log("issues", itemdata);
  
    }
 
    return (
      <div>
        <h2 className=' mx-5 my-2'> Open Issues</h2>
        <div className='open_issuse'>
          {open_issues.map((item) =>
            <Card className='card my-5' key={item.id} style={{ width: '18rem' }}>
            Issues Name: <Card.Title> {item.note} </Card.Title>
             
            </Card>
          )}
        </div>
        
      </div>
  
    )
  }
export default Details;