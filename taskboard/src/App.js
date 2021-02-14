// import logo from './logo.svg';
import "./App.css";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";
import Classcontent from "./Class/Classcontent";
import Classs from "./class_comp/Classs";
import ControlledInput from "./Controlled_input/ControlledInput";
import Refelem from "./Ref/Ref";

function App() {
  return (
    <div className="App">
       <Refelem />
     {/* <Navbar />
   
      <div className="flex"></div>
        <Sidebar />
        <Content />   <Classs /> */}
        {/* <Classcontent /> */} {/*<ControlledInput /> */}
      
    </div>
  );
}

export default App;
