import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

const HookCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <div>num of cake -{numOfCakes}</div>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
};

export default HookCakeContainer;
