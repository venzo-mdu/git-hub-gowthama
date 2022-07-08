import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { select } from '../stores/action';
// const Data = (props) => {
    
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


  function Data() {
    // const dispatch = useDispatch();
    const selectValue = useSelector((state) => state.selectValue)
    console.log("value",selectValue.text);
    useEffect(() => {
      fetchidApi();
      fetchidissues();
    }, [selectValue]);

    // useEffect( () => {dispatch(select());}, [dispatch]);

    const [open_issues, setOpen_issues] = useState([]);
    const [close_issues, setClosed_issues] = useState([]);

    const fetchidApi = async () => {
      const data = await fetch (`https://api.github.com/repos/venzo-tech/${selectValue.text}/issues`
      );
      const itemdata = await data.json();
      setOpen_issues(itemdata);
    }
    const fetchidissues = async () => {
      const data = await fetch (`https://api.github.com/repos/venzo-tech/${selectValue.text}/issues/comments`);
      const item =await data.json();
      setClosed_issues(item)
      console.log("seeee",data,item)

    }
    return (
      <>
      { open_issues.map((item) => 
        <Card className='card my-5'  key ={item.id} style={{ width: '18rem' }}> 
          Project Name: <Card.Title> {item.title} </Card.Title>
            <Card.Body>
            <Card.Text>Id: &nbsp;{item.id}  </Card.Text>
              <Card.Text>Created time: &nbsp;{item.created_at}</Card.Text>
              <Card.Text>State: &nbsp;{item.state}</Card.Text>
              <Card.Text>Number: &nbsp;{item.number} </Card.Text>
            </Card.Body>
         </Card>       
        )}
        { close_issues.map((item) => 
        <Card className='card my-5'  key ={item.id} style={{ width: '18rem' }}> 
          Project Name: <Card.Title> {item.title} </Card.Title>
            <Card.Body>
            <Card.Text>Id: &nbsp;{item.id}  </Card.Text>
              <Card.Text>Created time: &nbsp;{item.created_at}</Card.Text>
              <Card.Text>State: &nbsp;{item.state}</Card.Text>
              <Card.Text>Number: &nbsp;{item.number} </Card.Text>
            </Card.Body>
         </Card>       
    )}
      </>
     
    )
  }
  


//   const mapStateToProps = (state) => {
//     console.log("state", state.selectValue)

//     return {
      
//       selectValue: state.selectValue
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         inputChanged:(e) => {
//             const action ={ type:"SELECT_CHANGE"};
//             console.log("disp", action)

//             dispatch(action);
//         }

//     }
// }




// export default connect(mapStateToProps,mapDispatchToProps)(Data);
  export default Data;