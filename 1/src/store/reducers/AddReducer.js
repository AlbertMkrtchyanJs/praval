const ADD = "add";

const initState = {
   todo: [],
   isFetching: false
};

const AddReducer = (state = initState,action) => {
        switch(action.type){
            case ADD:
                return {
                    ...state,
                    todo: [
                        ...state.todo,
                        action.payload
                    ]
                }  
                default:
                    return state;
        }
}

export const addToDoAC = (newToDo) => ({type: ADD, payload: newToDo});

export default AddReducer