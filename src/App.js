import { Component } from "react";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends Component{
  render(){
    return <div className="App">
      <Sidebar/>
      <Chat/>
    </div>;
  }  
}
export default App;
