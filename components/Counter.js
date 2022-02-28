import React, {useState} from "react";
import {Layout} from "../containers/index";

export default function Counter(){
    const [count, setCount] = useState(0)

    return <Layout>
    <button onClick={()=>{setCount(count +1)}}>+</button>
    <button onClick={()=>{setCount(count -1)}}>-</button>
    <div>{count}</div>
    </Layout>
}