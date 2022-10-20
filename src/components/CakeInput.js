import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

const CakeInput = () => {
  const [number, setNumber] = useState(0);
  const numOficeCream = useSelector((state) => state.iceCream.numOficeCream);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setNumber(e.target.value);
  };
  return (
    <div>
      {/* <div>num of cake -{numOfCakes}</div> */}
      <input type="text" onChange={changeHandler} />
      <button onClick={() => dispatch(buyCake(number))}>
        buy {number} cake
      </button>
    </div>
  );
};

export default CakeInput;
