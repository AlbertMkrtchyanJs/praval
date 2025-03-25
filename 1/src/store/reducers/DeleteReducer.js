const DELETE = "delete";

const initState = {
    todo: []
};

const DeleteReducer = (state = initState,action) =>{
    switch (action.type){
        case DELETE:
            return {
                ...state,
                todo: state
                    .todo
                    .filter((todo) => todo.id !== action.payload)
            }
            default:
                return state;
    }
}

export const deleteAC = (id) => ({type: DELETE, payload: id})

export default DeleteReducer