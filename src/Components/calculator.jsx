import  { useState } from "react";
function Calculate(){

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [result, setResult] = useState("");

    const addCalculate = () => {
       setResult(Number(input1) + Number(input2));
    };
    const divideCalculate = () => {
        if (Number(input2) === 0){
            setResult("Cannot divide by zero")
        }
        else{
       setResult(Number(input1) / Number(input2));
    };
    }
    const multiplyCalculate = () => {
        setResult(Number(input1) * Number(input2));
    };
    const subtractCalculate = () => {
         setResult(Number(input1) - Number(input2));
    };
    function resetCalculate  ()  {
        setInput1(""),
        setInput2("");
       setResult("");
    };
    
    function Change () {
        setInput1 (event.target.value)
    }
    function Change1 () {
        setInput2 (event.target.value)
    }




    return(
        <div className="container">
            <div className="child">
                <input type="number" id="input1" onChange={Change} value={input1} /><br />
                <input type="number" id="input2" onChange={Change1} value={input2}/><br />
                <input type="number" onChange={resetCalculate} placeholder="Result" readOnly id="result" value={result}/><br />
            </div>

            <div className="child1">
                <button onClick={addCalculate}>Add</button>
                <button onClick={subtractCalculate}>Subtract</button>
                <button onClick={divideCalculate}>Divide</button>
                <button onClick={multiplyCalculate}>Multiply</button>
                <button onClick={resetCalculate}>Reset</button>
            </div>  

        </div>
    )
}
export default Calculate;