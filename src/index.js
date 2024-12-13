import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Cal from './Cal';
const root = ReactDOM.createRoot(document.getElementById('manohar'));

const user=[
  {
    id:1,
    name:"Manohar",
    place:"Yazali"
  },
  {
    id:2,
    name:"Balu",
    place:"vizag"
  }
]
root.render(
  <React.StrictMode>

<Cal />
      </React.StrictMode>
);
//{
 // user.map(
   // (u)=>{
   //    return <Maps id={u.id} name={u.name} place={u.place} ></Maps>
    //}
 // )
//}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
