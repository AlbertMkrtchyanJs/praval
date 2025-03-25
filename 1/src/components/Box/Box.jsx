import { useDispatch, useSelector } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";
import { deleteTC } from "../../store/reducers/DeleteReducer";

const ToDos = () => {
  const { isFetching, todo } = useSelector((store) => store.GetState);
  const dispatch = useDispatch();

  const del = (id) => {
    dispatch(deleteTC(id));
  };

  return (
    <div>
      {isFetching ? (
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      ) : (
        todo.map((el) => {
          return (
            <>
              <input type="checkbox" />
              <span>{el.title}</span>
              <button onClick={() => del(el.id)}>X</button>
            </>
          );
        })
      )}
    </div>
  );
};

export default ToDos;
