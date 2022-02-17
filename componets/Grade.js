import React from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    return (<Layout><h1>성적표</h1>

    <form>
    <div></div>
    
    <div>
        <label><b>이름</b></label>
        <input/><br/>
        <label><b>국어점수</b></label>
        <input/><br/>
        <label><b>영어점수</b></label>
        <input/><br/>
        <label><b>수학점수</b></label>
        <input/><br/>

        <button>확인</button>
        <button>취소</button>
        
    </div>
    
    </form>
    </Layout>)
}
