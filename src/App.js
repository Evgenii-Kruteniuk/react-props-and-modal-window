import "./App.css";
import User from "./components/User/User";
import { Count, Counter } from "./components/Count/Count";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className="App">
      <Modal />
      <Count />
      <Counter />
      <User
        userName="Женя"
        age={38}
        color="красный"
        isFat={false}
        bgCard="#79c7c7"
        textColorCard="white"
      />
      <User
        userName="Саша"
        age={1}
        color="желтый"
        isFat={true}
        bgCard="#9c27b0"
        textColorCard="green"
      />
      <User
        userName="Маша"
        age={8}
        color="зеленый"
        isFat={false}
        bgCard="#11a8d4"
        textColorCard="yellow"
        isShow
      />
    </div>
  );
}

export default App;
