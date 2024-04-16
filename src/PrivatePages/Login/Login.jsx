import React from 'react'
import './Login.css';
import Navbar from '../../Components/Navbar/Navbar';

const Login = () => {
  const loggin = true;
  const alertMe = ()=> {
    if(!loggin){
  
      alert("Login first");
    }
  };
  return (
    <>
    <Navbar/>
    <div className='form-control'>
      <form className='form-fields'>
        <label htmlFor="">User Name: 
        </label>
        <input type="text" placeholder='user-name'/>
        <label htmlFor="">Password: 
        </label>
        <input type="text" placeholder='password' />
        <button type='submit' onClick={alertMe}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default Login


