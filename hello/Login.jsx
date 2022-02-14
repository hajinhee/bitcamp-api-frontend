import React from 'react';
const Login =()=>{
    return <><h1>로그인 폼</h1>
    <form>
        <div></div>
        <div>
            <label><b>Username</b></label>
            <input /> <br/>
            <label ><b>Password</b></label>
            <input /> <br/>
            <button>Login</button>
            <button>Cancel</button><br/>

            <label>
                <input/> Remember me
            </label>
        </div>
        <div>
            <span>Forgot <a>password?</a></span>
        </div>
    </form>
    
    </>

}
export default Login;
