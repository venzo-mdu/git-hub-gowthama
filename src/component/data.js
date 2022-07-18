import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Data() {
  const selectValue = useSelector((state) => state.selectValue)
  const orgValue =useSelector ((state) => state.inputValue)
  console.log("value", selectValue.text);
  console.log("orgName", orgValue.text);

  useEffect(() => {
    fetchidApi();
  }, [selectValue]);


  const [open_issues, setOpen_issues] = useState([]);

  const fetchidApi = async () => {
    const data = await fetch(`https://api.github.com/repos/${orgValue.text}/${selectValue.text}/issues`,{
      headers: {
           'Authorization': `Bearer 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`,
        },   
  }
    );
    const itemdata = await data.json();
    setOpen_issues(itemdata);

  }

  return (
    <div>
      <h2 className=' mx-5 my-2'> Open Issues</h2>
      <div className='open_issuse'>
        {open_issues.map((item) =>
          <Card className='card my-5' key={item.id} style={{ width: '18rem' }}>
          Issues Name: <Card.Title> {item.title} </Card.Title>
            <Card.Body>
              <Card.Text>Id: &nbsp;{item.id}  </Card.Text>
              <Card.Text>Created time: &nbsp;{item.created_at}</Card.Text>
              <Card.Text>State: &nbsp;{item.state}</Card.Text>
              <Card.Text>Number: &nbsp;{item.number} </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  )
}

export default Data;