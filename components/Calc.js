import React, {useState} from "react";
import Layout from "../containers/Layout";
import axios from "axios";

export default function Calc(){
    const [inputs, setInputs] = useState({})
    const {num1, opcode, num2} = inputs;

    const handleChange = (e)=> {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        const calcRequest = {num1, opcode, num2}
        alert(`사용자이름: ${JSON.stringify(calcRequest)}`)
    }

    return <Layout>
    <form>
    <h1>계산기</h1>
    <label htmlFor=""><b>첫 번째 숫자</b></label><br/>
    <input name="num1" type='int'onChange={handleChange}/><br/>
    <label htmlFor=""><b>연산자</b></label><br/>
    <select name="opcode" type='text' onChange={handleChange}>
    <option value=''>+</option>
    <option value=''>-</option>
    <option value=''>*</option>
    <option value=''>/</option>
    <option value=''>%</option>
    </select><br/>
    <label htmlFor=""><b>두 번째 숫자</b></label><br/>
    <input name="num2" type='int'onChange={handleChange}/><br/>
    <button onClick={handleClick}>계산하기</button>
    </form>    
    </Layout>
}