import React from 'react';
import {useRoutes} from 'react-router-dom'
import Home from './pages/Home';
import Bmi from './componets/Bmi';
import Calc from './componets/Calc';
import Login from './componets/Login';
import Grade from './componets/Grade';
import Counter from './componets/Counter';

export default function App(){
return useRoutes([
  {path: "/", element: <Home /> },
  {path: "bmi", element: <Bmi /> },
  {path: "calc", element: <Calc /> },
  {path: "grade", element: <Grade /> },
  {path: "login", element: <Login /> },
  {path: "counter", element: <Counter /> },
]);
}