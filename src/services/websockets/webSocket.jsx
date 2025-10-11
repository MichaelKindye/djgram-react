import { useEffect, createContext, useContext, Children } from 'react';
import useWebSocket from 'react-use-websocket';
import { PairUserContext, UserContext } from '../context/userContext';
import { WebSocketContext } from '../context/userContext';

export function WebSocketProvider({children}){
    const { pairUser } = useContext(PairUserContext);
    const { user } = useContext(UserContext);
    const { sendJsonMessage, lastJsonMessage, readyState, getWebSocket } = useWebSocket(
        user && pairUser ? `wss://djgram.onrender.com/ws/${user.data.id}/${pairUser.id}/` : 'wss://djgram.onrender.com/ws/',
        {
            share: true,
            shouldReconnect: () => true,
            onError: (err) => console.error('ws-error:', err),
        }
    )

    return(
        <WebSocketContext.Provider value={{sendJsonMessage, lastJsonMessage, readyState, getWebSocket}}>
            {children}
        </WebSocketContext.Provider>
    )
};