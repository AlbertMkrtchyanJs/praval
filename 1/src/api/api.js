import { addToDoAC } from "../store/reducers/AddReducer";
import { deleteAC } from "../store/reducers/DeleteReducer";
import { getTodoAC, isfetchingAC } from "../store/reducers/GetReducer";


import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const API = {
  getToDo(dispatch) {
    instance
      .get("/todos?_limit=15")
      .then((res) => dispatch(getTodoAC(res.data)))
       dispatch(isfetchingAC(false));
  },
  createToDo(dispatch, newToDo) {
    instance.post("/todos", newToDo)
    .then((res) => dispatch(addToDoAC(res.data)));
  },
  deleteToDo(dispatch,id) {
    instance.delete(`/todos/${id}`)
      .then(() => dispatch(deleteAC(id)))
  },
};

export default API;
