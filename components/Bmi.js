import React, {useState} from "react";
import { memberBmi } from "../api";
import Layout from "../containers/Layout";

export default function Bmi(){ 
    const [inputs, setInputs] = useState({})
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
        const bmiRequest = {name, height, weight}
        console.log(`사용자이름: ${JSON.stringify(bmiRequest)}`)
        memberBmi(bmiRequest)
        .then(res=>{
            alert(res.data)
        })
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
    </Layout>
} 