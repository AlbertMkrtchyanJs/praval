import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTC } from "./store/reducers/GetReducer";

import Box from "./components/Box/Box";
import Input from "./components/Input/Input";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTC())
  }, []);

  return (
    <div>
     
      <Input />
      <Box />
    </div>
  );
}

export default App;
