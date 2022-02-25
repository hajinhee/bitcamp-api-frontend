import React, {useState} from "react";
import Layout from "../containers/Layout";
import axios from "axios";

export default function Grade(){
    const [inputs, setInputs] = useState({})
    const {name, kor, eng, math} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    } 
    const handleClick = (e) => {
        e.preventDefault()
        const gradeRequest = {name, kor, eng, math}
        alert(`사용자이름: ${JSON.stringify(gradeRequest)}`)
    }

    return <Layout>
    <form>
    <h1>성적표</h1>
    <div>
    <label htmlFor=""><b>이름</b></label><br/>
    <input type='text' name="name" onChange={handleChange}/><br/>
    <label htmlFor=""><b>국어점수</b></label><br/>
    <input type='text' name="kor" onChange={handleChange}/><br/>
    <label htmlFor=""><b>영어점수</b></label><br/>
    <input type='text' name="eng" onChange={handleChange}/><br/>
    <label htmlFor=""><b>수학점수</b></label><br/>
    <input type='text' name="math" onChange={handleChange}/><br/>
    
    <button onClick={handleClick}>확인</button>
    </div>
    </form>
    </Layout>
}