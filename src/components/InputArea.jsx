import React, {useState} from  "react";

function InputArea(props) {
  const [inputText, setInputText] = useState(""); 
  //moved this state here, as only inputArea comp needs to access

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={() => { //execute when clicked 
        props.onAdd(inputText); //addItem func in App.jsx
        setInputText("");

      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
