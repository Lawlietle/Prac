import Input from "../Inputs-forms/input";
import Buttons from '../Buttons/Buttons';
import { useState } from "react"; 
import {SignUpWthEmailandPassword, createUser} from '../../Firebase-folder/FireBase';
import { async } from "@firebase/util";
import {useContext} from 'react';
import { UserContext} from  '../User-components/UserContext';

let formField= {
  displayName:'',
  email:'',
  password:'',
  comfirmPass:''
}
const Signup = ({label})=>{
    // console.log(label)
  const {setCurrentUser}=  useContext(UserContext);



    let [form, setForm] = useState(formField);

    let{displayName,email, password, comfirmPass} = form;

    let SubmitHandler = async()=>{
 
      
      if(password === comfirmPass){
      
      let res = await SignUpWthEmailandPassword(email,password);

      if(res){
        

        let rep = await createUser(res.user, {displayName});
     
      setCurrentUser(rep)

    
      };

      console.log(res)
        


      }else{
        console.log('Password doesnt match')
      }

    }

    let onChangeHandlare= (event)=>{
     let {value, name} = event.target;



      setForm({...form, [name]: value})

    }

 
    return (

        <div>
             <h3>Don't have an account?</h3>
               <span>Sign up!</span>
            <form onSubmit={(e)=>{
              e.preventDefault();
              SubmitHandler();
            }}>
            <Input  label="Display Name" type="text"  placeholder='Name' onChange={onChangeHandlare} name='displayName' value={displayName}></Input>
             <Input label="Email" type="email" placeholder='Enter your email' onChange={onChangeHandlare} name='email' value={email}> </Input>
             <Input label="Password" type="Password"  placeholder='pass' onChange={onChangeHandlare} name='password' value={password}></Input>
             <Input label="Comfirm Password" type="password"  placeholder='com' onChange={onChangeHandlare} name='comfirmPass' value={comfirmPass}></Input>
            <Buttons style="invert" label='Sign up'></Buttons>
             </form>
        </div>
    
       
    )
}

export default Signup;