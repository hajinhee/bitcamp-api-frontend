import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Login(){
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [result, setResult] = useState('')

    const login = ()=>{
        let id = document.getElementById('id').value 
        console.log('id: ' +id)
        let password = document.getElementById('password').value 
        console.log('password: ' +password)
        setId(id)
        setPassword(password)
        setResult('아이디: ' +id+ ' 패스워드: ' +password)
        console.log('result: ' +result)
    }
    return <Layout><h1>로그인</h1>
    <form action="">
    <label htmlFor=""><b>아이디</b></label><br/>
    <input id="id" type=''/><br/>
    <label htmlFor=""><b>패스워드</b></label><br/>
    <input id="password" type=''/><br/>
    <button onClick={()=>{login()}}>확인</button>
    </form>
    <div>{result}</div>
    </Layout>
}