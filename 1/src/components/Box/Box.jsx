import { useDispatch, useSelector } from "react-redux";
import API from "../../api/api";
import { InfinitySpin } from "react-loader-spinner";


const ToDos = () => {
  const {isFetching,todo} = useSelector((store) => store.GetState)
  const dispatch = useDispatch()

  const del = (id) => {
    API.deleteToDo(dispatch,id)
  }

  return <div >
    { isFetching ? <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      /> :
        todo.map((el) => {
            return <>
             <input type="checkbox" />
        <span>{el.title}</span>
        <button onClick={() => del(el.id)}>X</button>
            </>
        })
    }
  </div>;
};

export default ToDos;
