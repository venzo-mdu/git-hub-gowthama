export const fetchRepos = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://api.github.com/orgs/venzo-tech/repos"
      );
      const data = await response.json();
      dispatch({ type: "FETCH_REPOS", payload: data });
    } catch (err) {
      dispatch({ type: "FETCH_REPOS_REJECTED", payload: err });
    }
  };
};

export const handleClick = (text) => {
  return async (dispatch) => {  
    try{
      dispatch({type: "text_action", payload: text});
    }catch (err) {
      dispatch({type: "text_ERROR", payload: err});
    }
    };
};