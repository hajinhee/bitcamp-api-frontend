import React, {useState} from "react";
import {Layout} from "../containers/index";
import { memberCalc } from "../api";

export default function Calc(){
    const [inputs, setInputs] = useState({})
    const {num1, opcode, num2} = inputs;
    const [result, setResult] = useState(0)

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberCalc({num1, opcode, num2})
        .then(res=>setResult(res.data))
        .catch(err=>console.log(`에러발생: ${err}`))
    }
    return <Layout>
    <form>
    <h1>계산기</h1>
    <label htmlFor=""><b>첫 번째 숫자</b></label><br/>
    <input name="num1" type="int" onChange={handleChange}/><br/>
    <label htmlFor=""><b>연산자</b></label><br/>
    <select name="opcode" onChange={handleChange}>
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
    <option value="%">%</option>
    </select><br/>
    <label htmlFor=""><b>두 번째 숫자</b></label><br/>
    <input name="num2" type="int" onChange={handleChange}/><br/>
    <button onClick={handleClick}>계산하기</button>
    </form>
    <div>{result}</div>
    </Layout>
    
    }