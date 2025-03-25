import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../../store/reducers/ChangeReducer";
import API from "../../api/api";

const Input = () => {
    const dispatch = useDispatch()
    const { text } = useSelector((store) => store.GetState)

    const add = (text) => {
        const newToDo = {
            id : new Date().getTime().toString(),
            title : text,
            completed : false,
        }
        API.createToDo(dispatch,newToDo)
        dispatch(changeText(text))
    }

  return (
    <div>
      <input value={text} onChange={(e) => dispatch(changeText(e.target.value))}/>
      <button onClick={() => add(text)}>+</button>
    </div>
  );
};

export default Input;
