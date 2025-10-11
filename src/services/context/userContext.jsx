import { useState, useEffect, createContext } from "react";

export const UserContext = createContext(null);
export const PairUserContext = createContext(null);
export const OnlineUsersContext = createContext(null);
export const WebSocketContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const PairUserProvider = ({children}) => {
    const [pairUser, setPairUser] = useState(null)
    
    return(
        <PairUserContext.Provider value={{pairUser, setPairUser}}>
            {children}
        </PairUserContext.Provider>
    )
}

export const OnlineUsersProvider = ({children}) => {
    const [onlineUsers, setOnlineUsers] = useState([]);

    return(
        <OnlineUsersContext.Provider value={{onlineUsers, setOnlineUsers}}>
            {children}
        </OnlineUsersContext.Provider>
    )
}