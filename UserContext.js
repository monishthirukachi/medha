import {createContext,useState} from "react";

const UserType = createContext();

const UserContext = ({children}) => {
    const [Userid,setUserid] = useState("");
    return (
        <UserType.Provider value={{Userid,setUserid}}>
            {children}
        </UserType.Provider>
    )
}

export {UserType,UserContext};