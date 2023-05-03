
import React from 'react'
import './LogIn.css'

import { useState } from 'react';

import { useDispatch } from 'react-redux';

import img1 from './pc.png'; 

function LogIn() {

  const dispatch = useDispatch()

 

  const[userInput, setUserInput] = useState({
    name:"",
    password:""
  })



   

const handleClick = ()=>{ 
   if(userInput.name==="admin" && userInput.password==="admin@123"){

  
    dispatch({
      type:"isLoginValue",
      logInValue:true
     })

   }else{
    alert("Enter Proper Credential")
   }
   

}



  return (
    <div className='topLogDiv'>


        <div className='mainLogDiv'> 
        
                   
        <div className='svgwave1' style={{height: "495px", overflow: "hidden"}}  ><svg viewBox=" 0 0 400 150" preserveAspectRatio="none" style={{height:"100%", width:"100%"}} ><path d="M-5.93,-38.91 C152.81,79.09 437.81,89.08 280.79,150.00 L0.00,180.00 L0.00,0.00 Z" style={{stroke:"none", fill:"rgb(180, 225, 224)"}} ></path></svg></div>

        <div className='childDiv'>
                         <div className='left'>
                            <h1 className='wel'>Welcome</h1>
                            
                            <p className='DEFN'>INTRODUCING BROKER OPERATING SYSTEM</p>

                                       <img className='pcicon' src={img1} />
                    
<div className='svgwave2' style={{height: "353px", overflow: "hidden"}}  ><svg viewBox=" 0 0 400 150" preserveAspectRatio="none" style={{height:"100%", width:"100%"}} ><path d="M-5.93,-38.91 C152.81,79.09 437.81,89.08 280.79,150.00 L0.00,180.00 L0.00,0.00 Z" style={{stroke:"none", fill:"rgb(101, 192, 189)"}} ></path></svg></div>

                  </div>

                  <div className='right'>

                        <div className='heading' ><h1>LOGIN</h1></div>

                         <div className='box'>

                        <div className='inputDiv1'>
                            <label>Username</label>
                            <i className="fa-solid fa-user" style={{color: "#3670d3"}}></i>
                        <input onChange={(e)=>{
                         setUserInput({...userInput,
                                       name:e.target.value
                        })

                        }} className='' type='text' />
                        
                       
                        </div>

                        <div className='inputDiv2'>
                            <label>Password</label>
                            <i className="fa-solid fa-key" style={{color: "#3670d3"}}></i>
                        <input className='' type='password' 
                        
                        onChange={(e)=>{
                          setUserInput({...userInput,
                                        password:e.target.value
                         })
 
                         }}

                        />
                       
                        </div>

                        <div className='btndiv'><button className='btn'

                        onClick={handleClick}
                        
                        
                        ><b>Login</b></button></div>

                        </div>

                  <div className='helpdiv'><h4>Forgot</h4>
                       <h5>Help</h5>    
                  </div>      

                  </div>

        </div>
        
        
    </div>

</div>   

  )
}

export default LogIn