import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';


import './Home.css'
import Nav from '../Components/Nav';

function Home() {

  const getUserData =()=>{

  }


 const {users} = useSelector((storedata)=>{
    return storedata
  })

  console.log(users)

  const dispatch = useDispatch()

  useEffect(()=>{
    fetch("https://api.github.com/users").then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      dispatch({
        type:"users",
        payload:data,
      })
    })

  },[])



  return (
    <>


    <div className='mainbody'  >
        
        
           

            <div className='tile'  >

                {
                    users.map((profile)=>{  
                        return <Link to={`/UserDetailsPage/${profile.id}`}> <div className='mainDiv' onClick={getUserData}>


                        <div className='leftSide'>
                          <img className='dpimgOfHome' src={profile.avatar_url}  />
          
                        </div>
          
                        <div className='rightSide'>
          
                              <div className='topRightSide'>
                                 <h2 className='nameTag'>{profile.login}</h2>
                                 <p>llowing/other_user</p>
                              </div>
          
                              <div className='bottomRightSide'>
          
                                   <div className='1stcoloumn'>
                                    <h6>Articles</h6>
                                    <h3>38</h3>
          
                                    </div>
          
                                      <div className='2ndcoloumn'>
                                            <h6>Followers</h6>
                                           <h3>980</h3>
          
                                         </div>
          
                                          <div className='3rdcoloumn'>
                                                 <h6>Ratings</h6>
                                                 <h3>8.9</h3>
          
                                            </div>
          
                              </div>
          
          
          
          
                        </div>
          
          
              </div>
              </Link >



                    })
                }



                </div>

                
            
            
            
           
        



    </div>
    </>
  )
              }


export default Home