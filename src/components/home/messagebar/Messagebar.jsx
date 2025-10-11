import Head from "@/components/home/messagebar/Head";
import MessageBox from "@/components/home/messagebar/MessageBox";
import MessageInput from "@/components/home/messagebar/MessageInput";
import { useState, useEffect, useContext } from 'react';
import { fetchMessages } from "@/services/api/API";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { PairUserContext, UserContext, WebSocketContext } from "@/services/context/userContext";

dayjs.extend(relativeTime)

const Messagebar = () => {
    const [ messages, setMessages ] = useState([]);
    const [ inputValue, setInputValue ] = useState('');
    const [ isTyping, setIsTyping ] = useState(false);
    const [ pairUserTyping, setPairUserTyping ] = useState(false);
    const { pairUser } = useContext(PairUserContext);
    const { user } = useContext(UserContext);
    const { lastJsonMessage, sendJsonMessage } = useContext(WebSocketContext);
    useEffect(() => {
        console.log('Entered useEffect')
        console.log('user:', user.data?.id, 'pair user:', pairUser)
        if(pairUser && user){
            console.log('logged user:', user)
           fetchMessages(user.data.id, pairUser.id)
           .then(data => setMessages(data))
           .catch(data => data.detail || data.error || console.log('Error updating messages'));
        }
        
    }, [pairUser])

    useEffect(() => {
        setMessages([]);
    }, [pairUser])

    useEffect(() => {
        if(!lastJsonMessage) return;
        if(lastJsonMessage.action && lastJsonMessage.action === 'typing'){
            setPairUserTyping(true);
            return;
        }else if(lastJsonMessage.action && lastJsonMessage.action === 'typing_stop'){
            setPairUserTyping(false);
            return;
        }else if(lastJsonMessage.message){
            console.log('lastJsonMessage:', lastJsonMessage.message);
            const message = {'id': lastJsonMessage.id, 'sender': lastJsonMessage.sender, 'content': lastJsonMessage.message, 'timestamp': dayjs(lastJsonMessage.timestamp).fromNow()};
            if(pairUserTyping) setPairUserTyping(false);
            setMessages((prev) => [message, ...prev]);             
        }
    
    }, [lastJsonMessage])

    useEffect(() => {
        let typingTimeout;
        if(!pairUser) return;
        if(!isTyping){
            setIsTyping(true);
            sendJsonMessage({action:'typing'});
        }
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(() => {
            setIsTyping(false);
            sendJsonMessage({action:'typing_stop'});
        }, 3000);
        return () => clearTimeout(typingTimeout);
    }, [inputValue])

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            if(event.target.textContent.trim().length > 0){
                sendJsonMessage({message: event.target.innerText.trim()});
                event.target.innerText = '';
                event.target.parentElement.replaceChildren('', event.target);
                event.target.focus();
            }else{
                setTimeout(() => {
                    sendJsonMessage({action:'typing_stop'})
                }, 3000);
            }
        }
    };

    const handleDelete = (message) => {
        setMessages((prev) => prev.filter((msg) => msg.id !== message.id));
        sendJsonMessage({action:'delete_message', message_id:message.id});
    };

    return(
        <div className="h-screen max-w-full flex-1 flex flex-col overflow-hidden">
            {pairUser ? <Head pairUser={pairUser} pairUserTyping={pairUserTyping}/> : null}
            
            <div className="overflow-y-scroll overflow-x-hidden h-full flex flex-col-reverse">
            {messages && messages.length > 0 ? (
              messages.map((message) => (
                <MessageBox key={message.id} message={message} handleDelete={handleDelete}/>
            ))
            ) : !pairUser ? (
                <p className="w-full h-full flex items-center justify-center">Click a chat to start messaging</p>
            ) : (
                <p className="w-full h-full flex items-center justify-center">No chats yet</p>
            ) 
            }  
            </div>
            <MessageInput handleKeyDown={handleKeyDown} setInputValue={setInputValue} setPairUserTyping={setPairUserTyping} setIsTyping={setIsTyping} className="flex-1"/>
        </div>
    )
}

export default Messagebar;