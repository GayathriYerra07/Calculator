import { Provider } from "react-redux";
import Calculator from "./components/CalculatorOne";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      {/* Wrapping the entire application with the Redux Provider */}
      <div>
        {/* Rendering the Calculator component */}
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
