import "./App.css";
import CakeView from "./features/Cake/CakeView";
import IcecreamView from "./features/Icecream/IcecreamView";
import UserVIew from "./features/User/UserVIew";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserVIew />
    </div>
  );
}

export default App;
