import React from 'react'


// function CalculatorButton({value = null, setTempResultProp = null}){
function CalculatorButton({value = null, text = "N/A", setTemp}){
  return(
    <button 
    style={Style} 
    onClick={() => handleClick(value, setTemp)} 
    value={value}
    >
      {text}
    </button>
  )
}


function handleClick(value, setTemp){
  console.log("CalculatorButton.js: ", event.target.value)
  setTemp(value);
}


const Style = {
  backgroundColor: "black", 
  color: "white",
  borderColor: "grey",
  fontWeight: "bold", 
  cursor: "pointer",
  width: "30px",
  height: "30px",
}

// ask mouh: styling on hover
// chatGPT answer didn't work
// my only remaining idea is: className="x" then style x:hover using regular css

// ask mouh: should I style the button here or within parent
// because I will need a global vue of the styling later to finish a calculator ui


export default CalculatorButton;