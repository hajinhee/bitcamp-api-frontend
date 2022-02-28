import React, {useState} from "react";
import { memberBmi } from "../api";
import {Layout} from "../containers/index";

export default function Bmi(){ 
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {name, height, weight} = inputs; //Object Destructuring

    const handleChange = (e)=> {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e)=> {
        e.preventDefault()
        memberBmi({name, height, weight})
        .then(res=>{setResult(res.data)})
        .catch(err => console.log(`에러발생: ${err}`))
    }


    return <Layout>
    <form>
    <h1>BMI</h1>
    <div>
    <label htmlFor=""><b>이름</b></label><br/>
    <input type='text' name='name' onChange={handleChange}/><br/>
    <label htmlFor=""><b>키</b></label><br/>
    <input type='text' name='height' onChange={handleChange}/><br/>
    <label htmlFor=""><b>몸무게</b></label><br/>
    <input type='text' name='weight' onChange={handleChange}/><br/>

    <button onClick={handleClick}>BMI 체크</button>
    </div>
    </form>
    <div>BMI 결과: {result}</div>
    </Layout>
} 