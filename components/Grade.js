import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Grade(){
    const [name, setName] = useState('')
    const [kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)
    const [math, setMath] = useState(0)
    const [result, setResult] = useState('')

    const grade = () => {
        let name = document.getElementById('name').value
        console.log('name: ' +name)
        let kor = document.getElementById('kor').value
        console.log('kor score: ' +kor)
        let eng = document.getElementById('eng').value
        console.log('eng score: ' +eng)
        let math = document.getElementById('math').value
        console.log('math score: ' +math)
        setName(name)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setResult('이름: ' +name+ ' 국어점수: ' +kor+ ' 영어점수: ' +eng+ ' 수학점수: ' +math)
        console.log('result: ' +result)
    }
    return <Layout><h1>성적표</h1>
    <form action="">
    <label htmlFor=""><b>이름</b></label><br/>
    <input id="name" type=''/><br/>
    <label htmlFor=""><b>국어점수</b></label><br/>
    <input id="kor" type=''/><br/>
    <label htmlFor=""><b>영어점수</b></label><br/>
    <input id="eng" type=''/><br/>
    <label htmlFor=""><b>수학점수</b></label><br/>
    <input id="math" type=''/><br/>
    
    <button onClick={()=>{grade()}}>확인</button>
    </form>
    <div>{result}</div>
    </Layout>
}