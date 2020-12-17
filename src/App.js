import { Component } from "react";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";

class App extends Component{
  render(){
    return <div className="app">
      <div className="body">
        <Sidebar/>
        <Chat/>
      </div>
  </div>;
  }  
}
export default App;
