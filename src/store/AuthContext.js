import { createContext, useState } from "react";


export const authContext = createContext(null);

export const AuthProvider = ({ children }) => {


    const [loginStatus, setloginStatus] = useState(false);

    return <authContext.Provider value={{ loginStatus, setloginStatus }}>{children}</authContext.Provider>

}
