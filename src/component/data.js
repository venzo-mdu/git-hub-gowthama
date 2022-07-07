import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selecte } from '../stores/action';
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
    const dispatch = useDispatch();
    const selectedValue = useSelector((state) => state.selectedValue)
    console.log("value",selectedValue);

    useEffect(() => {
      fetchiditem();
    }, [selectedValue]);

    useEffect( () => {dispatch(selecte());}, [dispatch]);

    const [itemid, setitems] = useState([]);
       console.log("list",itemid);

  
    const fetchiditem = async () => {
      const data = await fetch (`https://api.github.com/repos/venzo-tech/${selectedValue}/issues`
      );
      const itemdata = await data.json();
      setitems(itemdata.data.item);
      console.log("seeee",itemdata.data.item)
    }
    return (
        itemid.map((item) => 
        <Card className='card'  key ={item.id} style={{ width: '18rem' }}> 
            <Card.Img className='my-2' variant="top" src={item.owner.avatar_url} /> 
                Project Name: <Card.Title> {item.name} </Card.Title>
         </Card>       
    )
    )
  }
  


  const mapStateToProps = (state) => {
    console.log("state", state.selectedValue)

    return {
      
      selectedValue: state.selectedValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChanged:(e) => {
            const action ={ type:"SELECT_CHANGE"};
            console.log("disp", action)

            dispatch(action);
        }

    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Data);
  // export default Data;