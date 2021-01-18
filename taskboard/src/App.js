// import logo from './logo.svg';
import "./App.css";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";
import Classcontent from "./Class/Classcontent";
import Classs from "./class_comp/Classs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Classs />
      {/* <div className="flex">
        <Sidebar />
        <Content />
        <Classcontent />
      </div> */}
    </div>
  );
}

export default App;
