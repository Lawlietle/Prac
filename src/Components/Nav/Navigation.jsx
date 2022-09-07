import {Fragment, useContext } from 'react';
import {Link, Outlet} from 'react-router-dom';
import './nav.scss';
import {UserContext} from './../User-components/UserContext'

let Nav = ()=>{
    let {currentUser} = useContext(UserContext);
    console.log('hi there', currentUser)
return(


    <Fragment>
        <div   className='Nav-links'>
            <div>
                <Link to={'/'}> Home</Link>
            </div>
            
            <div className='navss'>
              <Link to={'Sign-in'}>Sign in</Link>
            <Link to={'Sign-up'}> Sign Up!</Link>
           
            </div>
        

         
        </div>
     
     {  currentUser? (
 <h1>You are  logged in!</h1>
     ): (
        <h1>You are not logged in!</h1>
     )

     }  
     
        
    <Outlet></Outlet>

   

    </Fragment>




)
    

}

export default Nav;