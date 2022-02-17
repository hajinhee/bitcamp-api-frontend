import React from 'react';
import Layout from '../containers/Layout';
export default function Bmi(){
    return (<Layout><h1>Bmi</h1>
    <form>
    

        <div>
            <label><b>이름</b></label>
            <input/> <br/>
            <label><b>키</b></label>
            <input/> <br/>
            <label><b>몸무게</b></label>
            <input /><br/>

            <button>입력</button>
            <button>취소</button>
        </div>

    </form>
    </Layout>)
}
