import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";
const HookIceCream = () => {
  const numOficeCream = useSelector((state) => state.iceCream.numOficeCream);
  const dispatch = useDispatch();
  return (
    <div>
      <div>num of iceCream -{numOficeCream}</div>
      <button onClick={() => dispatch(buyIceCream())}>buy iceCream</button>
    </div>
  );
};

export default HookIceCream;
