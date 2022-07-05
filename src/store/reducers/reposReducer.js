const initialState = {
    repos: [],
  };
  
  const reposReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_REPOS":
  
        return {
          ...state,
          repos: action.payload,
  
        };
      default:
        return state;
  
    }
  };
  
  export default reposReducer;
  




  const initSate ={
    issues:[]
  }
  const issuesReducer = (state = initSate, action) => {
    switch (action.type) {
      case "FETCH_ISSUES":
  
        return {
          ...state,
          issues: action.payload,
  
        };
      default:
        return state;
  
    }
  };
  
  export  {issuesReducer};
  