import API from "../../api/api";


const GET_TODO = "getTodo";
const IS_FETCHING = 'is-fetching'


const initState = {
    todo: [],
    text: "",
    isFetching: false
};

const GetReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                todo: action.payload
            }
        case IS_FETCHING:
            return{
                ...state,
                isFetching: action.payload
            }
        default:
            return state;
    }
};

export const isfetchingAC = (bool) => ({type: IS_FETCHING,payload: bool})
export const getTodoAC = (todo) => ({type: GET_TODO, payload: todo});

export const getTC = () => {
    return (dispatch) =>{
        dispatch(isfetchingAC(true));
    API.getToDo(dispatch)
    }
}

export default GetReducer;
