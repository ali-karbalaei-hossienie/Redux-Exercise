import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
import HookCakeContainer from "./components/HookCakeContainer";
import HookIceCream from "./components/HookIceCream";
import CakeInput from "./components/CakeInput";
import UserContainer from "./components/UserContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <HookIceCream />
        <CakeInput />
        <UserContainer />
      </div>
    </Provider>
  );
};

export default App;
