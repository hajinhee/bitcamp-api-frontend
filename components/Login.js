import React, {useState} from "react";
import Layout from "../containers/Layout";
import { memberLogin } from "../api";

export default function Login(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
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
        memberLogin({id, password}).then(res=>{setResult(res.data)})
        .catch(err => console.log(`에러발생: ${err}`))

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
    <div>{result}</div>
    </Layout>
}