import React, { useState } from 'react';
import Layout from '../containers/Layout';
export default function Login(){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [result, setResult] = useState("")

    const login = () => {
        let userName = document.getElementById('userName').value
        console.log('이름: '+ userName)
        let password = document.getElementById('password').value
        console.log('패스워드: '+ password)
        setUserName(userName)
        setPassword(password)
        setResult('이름: ' +userName+ '패스워드: ' +password)
        console.log('결과: '+ result)

    }


    return (<Layout><h1>로그인 폼</h1>
    <form action=''>
        <label><b>username</b></label>
        <input id='userName' type='' /> <br/>
        <label ><b>password</b></label>
        <input id='password' type='' /> <br/>
        <button onClick={()=>{login()}}>login</button>
        <button>cancel</button><br/>
        <label>
        <input/> Remember me
        </label>
        <div>
            <span>Forgot <a>password?</a></span>
        </div>
    </form>
    <div>{result}</div>
    </Layout>)

}

