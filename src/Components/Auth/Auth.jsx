import Signup from "../Sign-up/Sign-up";
import SignIN from "../Sign-in/Sign-in";
import './Auth.scss';
import Nav from "../Nav/Navigation";
import { Routes, Route } from "react-router-dom";
const Auth = ()=>{



    return(
        <div className="auth">
          
          <Routes>

            <Route path="/" element={<Nav></Nav>}>
              
                <Route path="Sign-in" element={<SignIN></SignIN>}>
                
                </Route>
                <Route path="Sign-up" element={<Signup></Signup>}>
                
                </Route>
                
                
            </Route>
          </Routes>
        
      
        </div>
       
    )
}

export default Auth;