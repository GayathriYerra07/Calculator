import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCalculation, clearHistory } from "../actions";

const Calculator = () => {
  // State for the input value of the calculator
  const [val, setval] = useState("");
  // Accessing the calculation history from the Redux store
  const history = useSelector((state) => state.history);
  // Dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Function to handle button click events
  const handleClick=(value) =>{
    console.log(value.label)
    if(value.label ==="⌫")
      handlBackSpace();
    else if(value.label === "C")
      handleClear();
    else if(value.label === "=")
      handleEqual();
    else 
     setval(pre => pre + value.label)
  }

  // Function to evaluate the expression and update the result
  const handleEqual = () => {
    try {
      const res = eval(val) || "Error";
      dispatch(addCalculation(`${val}=${res}`));// Dispatching the calculation to the Redux store
      setval(res.toString());// Updating the input value with the result
    } catch (error) {
      setval("Error");
    }
  };

  // Function to remove the last character from the input value
  const handlBackSpace = () => {
    setval((input) => input.slice(0, -1));
  };

  // Function to clear the input value
  const handleClear = () => {
    setval("");
  };

  // Function to clear the calculation history
  const handleClearHistory = () => {
    dispatch(clearHistory());// Dispatching the action to clear history to the Redux store
  };

  const renderButtons = (numbers) => {
    console.log(numbers.value)
     return numbers.map((label, index) => (
      <div className="col-3">
        <button
          className="btn btn-light text-primary shadow p-4 fs-4"
          key={index}
          value={numbers[index]}
          onClick={()=>handleClick({label})}>
          {label}
        </button>
      </div>
    ));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center text-primary">Calculator</h1><hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div class="card mb-3 shadow px-3">
              <div class="card-body text-primary ">
                <input type="text" className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow"
                  value={val} onChange={(e) => {setval(e.target.value);}}/>
                <div className="row">
                  {renderButtons(["1","2","3","⌫"])}
                </div>
                <div className="row mt-2">
                  {renderButtons(["4","5","6","C"])}
                </div>
                <div className="row mt-2">
                {renderButtons(["7","8","9","+"])}
                </div>
                <div className="row mt-2">
                  {renderButtons([".","0","=","-"])}
                </div>
                <div className="row">
                  <h1 className="col-7 fs-6 mt-4">
                    <u>Calculation History</u>
                  </h1>
                  <button
                    className="btn btn-primary btn-sm col m-3 border-2 text-primary text-bg-light"
                    onClick={handleClearHistory}
                  >
                    Clear history
                  </button>
                  {history.map((calculation, index) => (
                    <li key={index}>{calculation}</li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
