import React from 'react'
import './App.css'
const Lower=(props)=> {
  return (
    <div><div id='wheel-container'>
    <div className="wheel">
        <div  id="menu" onMouseOver={props.rotate}>
          Menu
        </div>
        <div  id="forward">
          <img className='icons' alt='forward' src='https://cdn-icons-png.flaticon.com/512/1/1824.png'/>
        </div>
        <div id='click-to-open'onClick={props.print} ></div>
        <div id='backward'>
          <img className='icons' alt='backward' src='https://cdn-icons-png.flaticon.com/512/4029/4029036.png'/>
        </div>
        <div id='pause'>
          <img className='icons' alt='pause/play' src='https://cdn-icons-png.flaticon.com/512/7375/7375961.png'/>
        </div>
    </div>
  </div></div>
  );
}

export default Lower