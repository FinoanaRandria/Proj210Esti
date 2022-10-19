import React ,{useEffect,useRef } from 'react'
import Lottie from 'lottie-web'
import "./Preloader.css"
import esti from "../img/Esti.png"
function Preloader() {

    const container = useRef(null)
      useEffect(()=>{
        Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:true,
            animationData:require('../img/lottie/loading.json')
        })
      },[])
  return (
      <div className='cont' > 
        <img className='estix' src={esti} alt="none"/>
      <div className='im' ref={container}></div>
       </div>
    
  )
}

export default Preloader