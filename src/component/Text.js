import React, {useState} from 'react'
import './Text.css';
const Text = () => {
    const [Text,SetText] = useState("Enter Text Here");
    function HandleupClick(){
        let newText = Text.toUpperCase();
        SetText(newText);
    }
    function HandlelowClick(){
      let newText = Text.toLowerCase();
      SetText(newText);
  }
  function HandlecopyClick(){
    var newText = document.getElementById("textbox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
}
    function HandleremoveClick(){
      let newText = Text.split(/[ ]+/);
      SetText(newText.join(" "));
    }
    function HandleonChange(event){
        SetText(event.target.value);
    }
  return (
    <div className='container'>
      <h1>Write About You</h1>
      <div className='Text'>
        <textarea value={Text} onChange={HandleonChange} id="textbox" cols="80" rows="10"></textarea>
      </div>
      <div className='box'>
      <button className='btn' onClick={HandleupClick}>convert to uppercase</button>
      <button className='btn' onClick={HandlelowClick}>convert to lowercase</button>
      <button className='btn' onClick={HandlecopyClick}>copy</button>
      <button className='btn' onClick={HandleremoveClick}>remove spaces</button>
      </div>
      <div>
        <h1>Preview</h1>
        <p>{Text}</p>
      </div>
    </div>
  )
}

export default Text
