import React, {useState} from 'react';
import { memberLotto } from '../api';
import Layout from '../containers/Layout';

export default function Lotto(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {a, b, c, d, e, f} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberLotto({a, b, c, d, e, f}).then(res=>setResult(res.data))
        .catch(err => console.log(`에러발생: ${err}`))
    }

    return <Layout>
    <form>
    <h1>로또</h1>
    </form>
    </Layout>
}