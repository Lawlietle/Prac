import Input from '../Inputs-forms/input';
import Buttons from '../Buttons/Buttons';
import {SingINWithGoogle, createUser} from '../../Firebase-folder/FireBase';
import './signin.scss';
import {SignINPassAndEmail} from '../../Firebase-folder/FireBase';
import { useState, useContext } from 'react'; 
import { async } from '@firebase/util';
import {UserContext} from '../User-components/UserContext';
// Sign in function starts here
let SignIN= ()=>{
    let fomrField= {
        email:'',
        password:''
    }
    
    let {setCurrentUser} = useContext(UserContext);

     // Setting the form field to the empty object we created
    let [form,setForm]= useState(fomrField);
    let {email, password} = form;

     //lets the user Sign in with google pop up when they click on "Sign in with Google" button
    let GoogleHandler = async()=>{
       
        let res= await SingINWithGoogle();

        createUser(res.user)
        // console.log(res);
    }

    let ChangeHandlare= (event)=>{
        let value = event.target.value;
        let name = event.target.name;
       
        setForm({...form, [name]: value})

    }

    let onSUbmit = async ()=>{

        let res= await SignINPassAndEmail(email, password);
        console.log(res.user)
        setCurrentUser(res.user)
    }

 

    return (
        <div    className='Sign-in'>
            <h3>Already have an account?</h3>
            <span>Sign in</span>
        <form onSubmit={(e)=>{
            e.preventDefault();
            onSUbmit();

        }}>
           <Input label="Username" name='email' type='text'  onChange={ChangeHandlare} placeholder='Username'></Input>
        <Input label="Password" name='password' type='Password'  onChange={ChangeHandlare} placeholder='Password'></Input>
      
      <div  className='btns-sign-in'>
        <Buttons label='Sign in' style={'invert'} type="submit"></Buttons>
        <Buttons  label='Google Sign in' style={'google'}  onClick={GoogleHandler} type="button"></Buttons>
        </div>
        </form>
        </div>
          )



}


export default SignIN;
