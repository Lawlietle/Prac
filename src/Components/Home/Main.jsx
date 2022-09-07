import Signup from "../Sign-up/Sign-up";
import SignIN from "../Sign-in/Sign-in";
import Auth from "../Auth/Auth";
import Nav from "../Nav/Navigation";
import { Routes, Route } from "react-router-dom";
const Home = ()=>{

    return(
        <div   className="auth">
       
            <Auth></Auth>
        </div>
       
    )
}

export default Home;