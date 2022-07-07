export const selecte = (text) => ( dispatch => {  
          dispatch({type: "SELECT_CHANGE", text: text});
          console.log(text)
    } 
    )

// export const search = (text) => ( dispatch => {  
//         dispatch({type: "INPUT_CHANZGE", payload: text});
//         console.log(text)
//     } 
// )   