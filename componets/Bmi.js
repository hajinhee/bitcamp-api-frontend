import React, { useState } from 'react';
import Layout from '../containers/Layout';
export default function Bmi(){
    const [name, setName] = useState("")
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const [result, setResult] = useState("")

    const Bmi = () => {
        let name = document.getElementById('name').value
        console.log('이름:' +name)
        let height = document.getElementById('height').value
        console.log('키:' +height)
        let weight = document.getElementById('weight').value
        console.log('몸무게:' +weight)
        setName(name)
        setHeight(Number(height))
        setWeight(Number(weight))
        setResult('이름: ' +name+ ' 키: ' +Number(height)+ ' 몸무게: ' +Number(weight))
        console.log('결과:' +result)
    }

    return <Layout><h1>Bmi</h1>
    <form action=''>
    <label><b>name</b></label>
    <input id="name" type=""/> <br/>
    <label><b>height</b></label>
    <input id="height" type=""/> <br/>
    <label><b>weight</b></label>
    <input id="weight" type=""/><br/>

    <button onClick={()=>{Bmi()}}>enter</button>
    <button>cancel</button>
    </form>
    <div>{result}</div>
    </Layout>
}
