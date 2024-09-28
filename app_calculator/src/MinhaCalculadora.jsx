import React from "react"
import StyledCalculator from "./styles"
import { useState } from "react";


function MinhaCalculadora() {

    const [inputValue, setInputValue] = useState("")
    const [storedValue, setStoredvalue] = useState(null)
    const [inputOperator, setInputOperator] = useState(null)

    const addNumber = (value) => {
        setInputValue((valorAnterior) =>  valorAnterior + value)
    }

    const chooseOperator = (op) => {
        setStoredvalue(inputValue)
        setInputValue("")
        setInputOperator(op)
    }

    const calculateResult = (inputValue, storedValue, inputOperator) => {
        let result
        switch (inputOperator) {
            case "+":
                result = parseFloat(storedValue) + parseFloat(inputValue)
                break
            case "-":
                result = parseFloat(storedValue) - parseFloat(inputValue)
                break
            case "*":
                result = parseFloat(storedValue) * parseFloat(inputValue)
                break
                case "/":
                result = parseFloat(storedValue) / parseFloat(inputValue)
                break
            default:
                result = "operador inválido"   
        }

        return result
    }

    const sendResult = (inputValue, storedValue, inputOperator) => {
        const result = calculateResult(inputValue, storedValue, inputOperator)
        setInputValue(result)
        setInputOperator("")
        setStoredvalue("")
    }

    const toggleSign = () => {
        setInputValue((prevValue) => {
        return prevValue.startsWith("-") ? prevValue.slice(1) : "-" + prevValue;
        });
      };
      


    return (
        <StyledCalculator className="box">
            <input type="text" value={inputValue} readOnly></input>
            <button className="ligthGray" onClick={() => setInputValue("")}>AC</button>
            <button className="ligthGray" onClick={toggleSign}>+/-</button>
            <button className="blue" onClick={() => chooseOperator("/")}>/</button>
            <button className="blue" onClick={() => chooseOperator("*")}>*</button>
            <button className="black" onClick={() => addNumber("7")}>7</button>
            <button className="black" onClick={() => addNumber("8")}>8</button>
            <button className="black" onClick={() => addNumber("9")}>9</button>
            <button className="blue" onClick={() => chooseOperator("/")}>-</button>
            <button className="black" onClick={() => addNumber("4")}>4</button>
            <button className="black" onClick={() => addNumber("5")}>5</button>
            <button className="black" onClick={() => addNumber("6")}>6</button>
            <button className="blue" onClick={() => chooseOperator("+")}>+</button>
            <button className="black" onClick={() => addNumber("1")}>1</button>
            <button className="black" onClick={() => addNumber("2")}>2</button>
            <button className="black" onClick={() => addNumber("3")}>3</button>
            <button className="ligthBlue" onClick={()=>sendResult(inputValue, storedValue,inputOperator )}>=</button>
            <button className="black zero" onClick={() => addNumber("0")} >0</button>
            <button className="black" onClick={() => addNumber(".")}>.</button>

 
        </StyledCalculator>
    );
}

export default MinhaCalculadora;
