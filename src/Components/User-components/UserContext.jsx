import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser: ()=> null,
})


export const UserProvider = ({Childreen})=>{
    let[ currentUser, setCurrentUser] = useState(null);
    console.log(currentUser)

    let value ={ currentUser, setCurrentUser};
    return <UserContext.Provider value={value}> {Childreen}</UserContext.Provider>
}
