import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[istrue,setistrue] = useState(false);
  const[istrue1,setistrue1] = useState(false);
  const[istrue2,setistrue2] = useState(false);
  const[istrue3,setistrue3] = useState(false);
  const[istrue4,setistrue4] = useState(false);

const handleChange = () =>{
 
    setistrue(!istrue);
    setistrue1(false);
    setistrue2(false);
    setistrue3(false);
    setistrue4(false);
 
}


const handleChange1 = () =>{
 
  setistrue(false);
  setistrue1(!istrue1);
  setistrue2(false);
  setistrue3(false);
  setistrue4(false);

}

const handleChange2 = () =>{
 
  setistrue(false);
  setistrue1(false);
  setistrue2(!istrue2);
  setistrue3(false);
  setistrue4(false);

}

const handleChange3 = () =>{
 
  setistrue(false);
  setistrue1(false);
  setistrue2(false);
  setistrue3(!istrue3);
  setistrue4(false);

}

const handleChange4 = () =>{
 
  setistrue(false);
  setistrue1(false);
  setistrue2(false);
  setistrue3(false);
  setistrue4(!istrue4);

}


  return (
        <div className="container">
    <div className={`panel ${istrue ? "active" : ''}`} style={{  backgroundImage:
        "url(https://images.unsplash.com/photo-1570102881689-c04ab4cf1f4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80)"}} onClick={handleChange}>
<h3>Ballons</h3>
      </div>
      <div className={`panel ${istrue1 ? "active" : ''}`} style={{  backgroundImage:
        "url(https://images.unsplash.com/photo-1590593162201-f67611a18b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80)"}} onClick={handleChange1}>
<h3>Flowers</h3>
      </div>
      <div className={`panel ${istrue2 ? "active" : ''}`} style={{  backgroundImage:
        "url(https://images.unsplash.com/photo-1647290805400-8626739e38b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"}} onClick={handleChange2}>
<h3>Illusions</h3>
      </div>
      <div className={`panel ${istrue3 ? "active" : ''}`} style={{  backgroundImage:
        "url(https://images.unsplash.com/photo-1647034166469-22eac250676a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"}} onClick={handleChange3}>
<h3>Explore the world</h3>
      </div>
      <div className={`panel ${istrue4 ? "active" : ''}`} style={{  backgroundImage:
        "url(https://images.unsplash.com/photo-1646972782490-8fd4291b3cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"}} onClick={handleChange4}>
<h3>Winter water</h3>
      </div>
      
    </div>
    
  );
    }

export default App;
