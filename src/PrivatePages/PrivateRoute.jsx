import React from 'react'
import {Outlet , Navigate} from 'react-router-dom';

const PrivateRoute = () => {
const loggedin =  true;


// 1st implementation
//   return (
    // <>
        {/* <div>This is private</div> */}
        {/* <Outlet/> */}
    {/* </> */}
    // 

//   );

// 2nd Implementation
// if(loggedin){
    // return <Outlet/>
// }else{
    // return "Redirect to login page"
// }

// 3rd Implementation
    if(loggedin){
        return <Outlet/>
    }else{
        return 
        <Navigate to={'/login'}/> 
    }
};

export default PrivateRoute;