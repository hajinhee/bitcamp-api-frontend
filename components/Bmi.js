import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Bmi(){
    const [name, setName] = useState('')
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const [result, setResult] = useState('')

    const bmi = ()=> {
        let name = document.getElementById('name').value
        console.log('name: ' +name)
        let height = document.getElementById('height').value
        console.log('height: ' +height)
        let weight = document.getElementById('weight').value
        console.log('weight: ' +weight)
        setName(name)
        setHeight(height)
        setWeight(weight)
        setResult('이름: ' +name+ '키: ' +height+ ' 몸무게: ' +weight)
        console.log('result: ' +result)
        
    }

    return <Layout><h1>BMI</h1>
    <form action="">
    <label htmlFor=""><b>이름</b></label><br/>
    <input id="name" type=''/><br/>
    <label htmlFor=""><b>키</b></label><br/>
    <input id="height" type=''/><br/>
    <label htmlFor=""><b>몸무게</b></label><br/>
    <input id="weight" type=''/><br/>

    <button onClick={()=>{bmi()}}>확인</button>
    </form>
    <div>{result}</div>
    </Layout>
}