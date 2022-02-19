import React, { useState }  from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    const [name, setName] = useState("")
    const [korScore, setKorScore] = useState(0)
    const [engScore, setEngScore] = useState(0)
    const [mathScore, setMathScore] = useState(0)
    const [result, setResult] = useState("")

    const grade = ()=>{
        let name = document.getElementById('name').value
        console.log('이름: '+name)
        let korScore = document.getElementById('korScore').value
        console.log('국어점수: '+korScore)
        let engScore = document.getElementById('engScore').value
        console.log('영어점수: '+engScore)
        let mathScore = document.getElementById('mathScore').value
        console.log('수학점수: '+mathScore)
        setName(name) 
        setKorScore(Number(korScore))
        setEngScore(Number(engScore))
        setMathScore(Number(mathScore))
        setResult('이름: '+name+ ' 국어점수: ' +Number(korScore)+ ' 영어점수: ' +Number(engScore)+ ' 수학점수: ' +Number(mathScore))
    }

    return (<Layout><h1>성적표</h1>

    <form action="">    
        <label><b>name</b></label>
        <input id="name" type=""/><br/>
        <label><b>kor score</b></label>
        <input id="korScore" type=""/><br/>
        <label><b>eng score</b></label>
        <input id="engScore" type=""/><br/>
        <label><b>math score</b></label>
        <input id="mathScore" type=""/><br/>

        <button onClick={()=>{grade()}}>check</button>
        <button>cancel</button>
        <div>{result}</div>
    
    </form>
    </Layout>)
}
