import axios from 'axios';

const SERVER = `http://localhost:8080`
export const memberBmi = bmiRequest => axios.get(`${SERVER}/member/bmi`)
export const memberCalc = calcRequest => axios.get(`${SERVER}/member/calc`)
export const memberGrade = gradeRequest => axios.get(`${SERVER}/member/grade`)
export const memberLogin = loginRequest => axios.get(`${SERVER}/member/login`)



