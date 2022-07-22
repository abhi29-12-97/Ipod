import React from 'react'
import './App.css';
function List(props) {
    const{menu}=props;
  return (
    
    <div className='List-Container'>
        <ul className='side-bar-menu'>
            <li>Ipod.js</li>
        {menu.map((item)=>{
           return <li className={item.isActive ? 'active':'inActive'}>{item.text}</li>
        })}
        </ul>
    </div>
  )
}

export default List