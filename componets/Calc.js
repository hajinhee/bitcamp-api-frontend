import React from 'react';
import Layout from '../containers/Layout';
export default function Calc(){
    return (<Layout><h1>계산기</h1>
    
    <form>
        <div></div>

        <div>
            <label><b>첫 번째 숫자</b></label>
            <input/><br/>
            <label><b>연산자</b></label>
            <input/><br/>
            <label><b>두 번째 숫자</b></label>
            <input/><br/>

            <button>계산하기</button>
            <button>취소</button>
            
        </div>
    </form>
    </Layout>)
}
