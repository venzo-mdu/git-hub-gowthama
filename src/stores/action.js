export const select = (text) => ( dispatch => {  
          dispatch({type: "SELECT_CHANGE", text: text});
          console.log(text)
    } 
    )

export const search = (text) => ( dispatch => {  
        dispatch({type: "INPUT_CHANZGE", text: text});
        console.log(text)
    } 
)   

export const projectId = (text) => ( dispatch => {  
    dispatch({type: "ProjectID_CHANZGE", text: text});
    console.log(text)
} 
)
export const projectDet = (text) => ( dispatch => {  
    dispatch({type: "ProjectDet_CHANZGE", text: text});
    console.log(text)
} 
)