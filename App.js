import React from "react";
import { useRoutes } from "react-router-dom";
import { Bmi, Calc, Counter, Grade, Login } from "./components/index";
import Home from "./pages/Home";

export default function App(){

    return useRoutes([
      {path: '/', element: <Home/>},
      {path: 'bmi', element: <Bmi/>},
      {path: 'calc', element: <Calc/>},
      {path: 'grade', element: <Grade/>},
      {path: 'login', element: <Login/>},
      {path: 'counter', element: <Counter/>},
    ])
}