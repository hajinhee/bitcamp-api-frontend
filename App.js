import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Bmi from "./components/Bmi";
import Calc from "./components/Calc";
import Grade from "./components/Grade";
import Login from "./components/Login";
import Counter from "./components/Counter";


export default function App(){
  return useRoutes([
    {path: '/', element: <Home/>},
    {path: 'bmi', element: <Bmi/>},
    {path: 'calc', element: <Calc/>},
    {path: 'grade', element: <Grade/>},
    {path: 'login', element: <Login/>},
    {path: 'counter', element: <Counter/>},
  ]);
}