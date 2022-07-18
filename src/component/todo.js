import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { detailsId } from '../stores/action';
import Details from './deatils';
// import {useNavigate} from "react-router-dom"

function ProjectsDetails() {
  const idValue = useSelector((state) => state.idValue)
  console.log("ProjectsDetails", idValue.text);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    fetchidApi();
  }, [idValue]);

  const [open_issues, setOpen_issues] = useState([]);
  const [ state,setState ] =useState('')
  const fetchidApi = async () => {
    const data = await fetch(`https://api.github.com/projects/${idValue.text}/columns`, {
      headers: {
        'Authorization': `Bearer `,
      },
    }
    );
    const itemdata = await data.json();
    setOpen_issues(itemdata);
    console.log(open_issues)
  }

  const github = async (name) => {
    const result = name
    console.log("check",result)
    const action ={ type:"DetailsId_CHANZGE", text:result};
    dispatch(detailsId(action))
    setState(true)
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
              <Card.Link className='prj_link' onClick={()=>github(item.id)} >Id: &nbsp;{item.id}  </Card.Link>
              <Card.Text>Created time: &nbsp;{item.created_at}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
      <div>
      {
        state ? <Details />: <p className=' mx-5 my-4'> no details</p>
      }
      </div>
    </div>
  )
}

export default ProjectsDetails;