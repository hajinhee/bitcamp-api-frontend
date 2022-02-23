import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Calc(){
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    const sum = ()=> {
        let num1 = document.getElementById('num1').value
        console.log('num1: ' +num1)
        let num2 = document.getElementById('num2').value
        console.log('num2: ' +num2)
        setNum1(num1)
        setNum2(num2)
        setResult(Number(num1)+Number(num2))
        console.log('result: ' +result)
    }
    return (<Layout><h1>계산기</h1>
    <form action="">
    <label htmlFor=""><b>첫 번째 숫자</b></label><br/>
    <input id="num1" type=''/><br/>
    <label htmlFor=""><b>연산자</b></label><br/>
    <select id="" type=''>
    <option value=''>+</option>
    <option value=''>-</option>
    <option value=''>*</option>
    <option value=''>/</option>
    <option value=''>%</option>
    </select><br/>
    <label htmlFor=""><b>두 번째 숫자</b></label><br/>
    <input id="num2" type=''/><br/>

    <button onClick={()=>{sum()}}>계산하기</button>
    </form>
    <div>{num1} + {num2} = {result}</div>
    </Layout>)
}