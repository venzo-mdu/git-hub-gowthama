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
    const data = await fetch(`https://api.github.com/repos/${orgValue.text}/${selectValue.text}/issues`
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
