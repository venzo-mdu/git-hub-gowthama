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

  export const textReducer = (state='', action) => {
    if(action.type === 'text_action') {
      return action.payload;
    }
    return state; 
  }