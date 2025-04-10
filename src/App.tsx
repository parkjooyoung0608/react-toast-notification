import { Provider } from "react-redux";
import store from "@/Redux/Store";
import Renderer from "@/Components/Toast/Renderer";
import Button from "@/Components/Button";

function App() {
  return (
    <Provider store={store}>
      <Renderer />
      <Button />
    </Provider>
  );
}

export default App;
