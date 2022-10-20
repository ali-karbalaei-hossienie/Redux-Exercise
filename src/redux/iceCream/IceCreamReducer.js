import { ICE_CREAM } from "./iceCreamType";
const initialState = {
  numOficeCream: 15,
};
const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ICE_CREAM:
      return { ...state, numOficeCream: state.numOficeCream - 1 };
    default:
      return state;
  }
};

export default IceCreamReducer;
