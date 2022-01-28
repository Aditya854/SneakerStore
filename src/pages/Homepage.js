import React from 'react';
import Caraosuel from '../home/Caraousel';
import video1 from "../Resources/SneakPeek/wow1.mp4";
import photo7 from "../Resources/SneakPeek/2.png";
import Menu from "../home/Menu"

function Homepage() {
  return (
    
    <div>
        
        <Caraosuel/>
        {/* <Menu/> */}
        {/* <img className='pp' src={photo7}/> */}
        {/* <video className='vv' autoPlay muted controls loop>
          <source src={video1} type="video/mp4"/>
          </video> */}
            
    </div>
   
  );
}

export default Homepage;
