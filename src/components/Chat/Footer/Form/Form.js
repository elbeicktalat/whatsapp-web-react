import { Mic, Send } from '@material-ui/icons';
import React, { useState } from 'react';
import './Form.scss';

function Form() {
  const [input, setInput] = useState("");
  let buttonChiled = <Send/>
  let disabled = false;
  
  const sendMessage = (e) => {
    e.preventDefault();
    console.log('hi', input);
    setInput("");
  }
  
  if (input === "") {
    buttonChiled = <Mic/>;
    disabled = true;
  }

  return <div className="Form">
   <form>
    <div className="input">
      <input type="text"
      value={input} 
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type here your message"/>
    </div>
    <button onClick={sendMessage} disabled={disabled}>{buttonChiled}</button>
   </form>
  </div>;
}


export default Form;
