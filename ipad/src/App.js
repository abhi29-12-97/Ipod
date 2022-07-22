import './App.css';
import React from "react";
import Lower from './lower';
import ZingTouch from 'zingtouch';
import List from './List';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      menu:[{
        id:1,
        text:"Cover Flow",
        isActive:false
      },{
        id:2,
        text:"Music",
        isActive:false
      },{
        id:3,
        text:"Games",
        isActive:false
      },{
        id:4,
        text:"Setting",
        isActive:false
      }]
    }
  }
  
  rotate=()=>{
    let currentAngle=15;
    let target=document.getElementById('wheel-container');
    let region = new ZingTouch.Region(target);
    region.bind(target, 'rotate', function(e) {
      currentAngle += e.detail.distanceFromLast;
      console.log(currentAngle);
      this.setClass(currentAngle);
    })
  }
  setClass(angle){
    let id=1;
    if(angle>15){
      id=2;
    }
    return(
      this.setState(prevState=>({
        menu: prevState.menu.map(
          el => el.id===id? {...el,isActive:true}:el
        )
      }))
    )
  }

  print=()=>{
    console.log("Clicked");
  }
  render() {
    const{menu}=this.state;
   return (
    <div className="App">
      <List 
      key={menu.id}
      menu={menu}
      />
      <Lower
      rotate={this.rotate}
      print={this.print}
      />
    </div>
    
   );
  }
}

export default App
