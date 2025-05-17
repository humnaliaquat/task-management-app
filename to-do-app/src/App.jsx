import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex flex-row justify-start items-start w-full  bg-gray-100">
      <SideBar />
      <Navbar />
    </div>
  );
}

export default App;
