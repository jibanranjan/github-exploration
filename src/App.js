import logo from './logo.svg';
import './App.css';



import LogIn from './Components/LogIn';
import Nav from './Components/Nav';

import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './Route/Home'
import Profile from './Route/Profile'
import UserDetailsPage from './Route/UserDetailsPage';

import { useSelector, useDispatch } from 'react-redux';


 



function App() {

  const {isLogin} =useSelector((storedata)=>{
    return storedata
  })



  return (
    <>
   
    {/* <div className="appmaincontainer">
    <LogIn />
      </div> */}

    {
      isLogin ? <div>
        
        <Nav/>
<Routes>

   <Route path='/' element={isLogin ? <Home/>:<Navigate to={"/"}/>} />
   <Route path='/profile' element={<Profile/>} />
   <Route path='/UserDetailsPage/:id' element={<UserDetailsPage/>} />

</Routes>
         </div> : <div><LogIn/></div>
    }

    
    </>
  );
}

export default App;
