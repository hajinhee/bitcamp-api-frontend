import React, {useState} from "react";
import Layout from "../containers/Layout";
import axios from "axios";

export default function Login(){
    const [inputs, setInputs] = useState({})
    const {id, password} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        const loginRequest = {id, password}
        alert(`사용자이름: ${JSON.stringify(loginRequest)}`)
    }
    
    return <Layout>
    <form>
    <h1>로그인</h1>
    <label htmlFor=""><b>아이디</b></label><br/>
    <input name="id" type='text' onChange={handleChange}/><br/>
    <label htmlFor=""><b>패스워드</b></label><br/>
    <input name="password" type='text'onChange={handleChange}/><br/>
    <button onClick={handleClick}>확인</button>
    </form>
    </Layout>
}