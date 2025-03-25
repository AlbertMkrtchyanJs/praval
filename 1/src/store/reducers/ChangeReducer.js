import API from "../../api/api";

const CHANGE_TEXT = "changeText";

const initState = {
    text: ""
};

const ChangeReducer = (state = initState,action) => {
        switch(action.type){
            case CHANGE_TEXT:
                return {
                    ...state,
                    text: action.payload
                }
                default:
                    return state;  
        }
}


export const changeTC = (newToDo) => {
    return (dispatch) => {
        API.createToDo(dispatch,newToDo)
        dispatch(changeText(text))
    }
}

export const changeText = (text) => ({type: CHANGE_TEXT, payload: text});

export default ChangeReducer