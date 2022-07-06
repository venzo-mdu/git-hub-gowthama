import { Card } from 'react-bootstrap';

import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos } from "../store/action";
import { getRepos } from "../store/selectors";

// const Data = (props) => {
//     const {rep} =props
//     console.log(rep)
//     const dispatch = useDispatch();
//     const repos = useSelector(getRepos);
    
//     useEffect( () => {dispatch(fetchRepos());}, [dispatch]);

//     return (
//         <div className='container '>
//         {repos.map((repos) =>
//          <Card className='card'  key ={repos.id} style={{ width: '18rem' }}> 
//          {console.log(repos.name)}

//             <Card.Body>         
//                 <Card.Text>issues: &nbsp;{repos.html_url} <br/> <br/>&nbsp; Forks_count:{repos.forks_count} </Card.Text>
// =            </Card.Body>

//         </Card>)}    
        
//         </div>
//     );
//   };
  


//   export default Data;


  function Data({match}) {
    useEffect(() => {
      fetchiditem();
    }, []);
    const [itemid, setitems] = useState([]);
   
    console.log(match);
  
    const fetchiditem = async () => {
      const data = await fetch (`https://api.github.com/repos/venzo-tech/${match.params.name}/issues`
      );
      const itemdata = await data.json();
      setitems(itemdata.data.item);
    }
    return (
      <div>
        {itemid.name}
      </div>
    );
  }
  
  export default Data;