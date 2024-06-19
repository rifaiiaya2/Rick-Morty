import { Provider } from "react-redux";
import TitleComponent from "./components/titleComponent";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TitleComponent />
      </div>
    </Provider>
  );
}

export default App;
