import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, 
signInWithPopup,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from 'firebase/auth';
import { UserContext } from "../Components/User-components/UserContext";
import { useContext } from "react";
import {doc, setDoc, getDoc,getFirestore} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyC3UL-9Fk42Dbiy4h8CuRgdkMlCJGPV-r8",
    authDomain: "log-in-page-a3ae3.firebaseapp.com",
    projectId: "log-in-page-a3ae3",
    storageBucket: "log-in-page-a3ae3.appspot.com",
    messagingSenderId: "897594241330",
    appId: "1:897594241330:web:e029e9cdc6c929eb6b272b"
  };

  const app = initializeApp(firebaseConfig);
let auth = getAuth();


let provider= new GoogleAuthProvider();


let db = getFirestore();

export const SignUpWthEmailandPassword = (email,password)=>{
  if(!email || !password) return;

  return createUserWithEmailAndPassword(auth,email,password);
}


export const createUser = async (auth, others={})=>{
  let {displayName, email}=  auth;
  console.log(displayName, ' ' , others.displayName)
  if(displayName == null){
    displayName = others.displayName;
    console.log(displayName)
  }
  console.log(displayName)
  // console.log(displayName)s
  let CurrentDate= Date();
  let userInfo = await doc(db,'users',auth.uid);

  let SnapShot = await getDoc(userInfo);

  console.log(SnapShot.exists());

  if(!SnapShot.exists()){
   await setDoc(userInfo,
      {

        displayName,
        email,
        CurrentDate
        
      
      });
        console.log('finished Signed')

        return auth;
  }else{
    console.log('User already Exists')
  }

  
return auth;
}

export const SignINPassAndEmail = async (email,password)=>{
if(!email || !password) return

  return await signInWithEmailAndPassword(auth,email,password);
}



export const SingINWithGoogle= async ()=> signInWithPopup(auth, provider);


