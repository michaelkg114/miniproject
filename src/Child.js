import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import {DataContext} from './App';

function Child() {
  const {name, age} = useContext(DataContext);
  return (
  <div className='App'> 
  {name ? name : 'no name'} 
  {age ? age : 'no age'} 
  </div>
  );
}

export default Child;
