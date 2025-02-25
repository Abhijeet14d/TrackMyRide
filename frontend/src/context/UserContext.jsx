import { createContext } from "react"
import { useState } from "react"

export const UserDataContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState({
        email:'',
        firstname:'',
        lastname:'',
    });
  return (
    <div>
        <UserDataContext.Provider value={{user, setUser}}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext