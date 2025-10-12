import { useContext } from 'react';
import useWebSocket from 'react-use-websocket';
import { PairUserContext, UserContext } from '../context/userContext';
import { WebSocketContext } from '../context/userContext';
import { useLocation } from 'react-router-dom';

export function WebSocketProvider({children}){
    const { pairUser } = useContext(PairUserContext);
    const { user } = useContext(UserContext);
    const location = useLocation();

    const Connect = location.pathname === '/';
    const { sendJsonMessage, lastJsonMessage, readyState, getWebSocket } = useWebSocket(
        Connect &&  user && pairUser ? `wss://djgram.onrender.com/ws/${user.data.id}/${pairUser.id}/` : Connect ? 'wss://djgram.onrender.com/ws/' : null,
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