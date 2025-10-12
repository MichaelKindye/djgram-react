import  Search  from "@/components/home/sidebar/Search";
import  Profile  from "@/components/home/sidebar/Profile";
import Users from "@/components/home/sidebar/Users";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchUsers, fetchOnlineUsers, fetchUser } from "@/services/api/API";
import { useState, useEffect, useContext } from "react";
import { WebSocketContext, UserContext, OnlineUsersContext} from "@/services/context/userContext";

const Sidebar = () => {
    const [users, setUsers] = useState([]);
    const {onlineUsers, setOnlineUsers} = useContext(OnlineUsersContext);
    const { lastJsonMessage } = useContext(WebSocketContext);
    const { setUser } = useContext(UserContext);

    const handleFetch = async (query='') => {
        try{
            const data = await fetchUsers(query);

            if(Array.isArray(data)){
            setUsers(data);
            }else{
                setUsers([]);
                console.error('Data is not an array:', data.detail || data.error || data);
            }            
        }catch(err){
            console.error('error:', err)
        }
    }

    const handleOnlineUsersFetch = async(users) => {
        try{
            const data = await fetchOnlineUsers(users);
            if(Array.isArray(data)){
                setOnlineUsers(data);
            };
        }catch(err){
            console.error('error:', err)
        }
    }

    useEffect(() => {
        if(!lastJsonMessage) return;
        if(lastJsonMessage.action && lastJsonMessage.action === 'went_online'){
            if(Array.isArray(onlineUsers) && onlineUsers.includes(lastJsonMessage.user)) return;
            setOnlineUsers(prev => [...prev, lastJsonMessage.user]);
        }else if(lastJsonMessage.action && lastJsonMessage.action === 'went_offline'){
            if(Array.isArray(onlineUsers) && !onlineUsers.includes(lastJsonMessage.user)) return;
            setOnlineUsers(prev => prev.filter((user) => user !== lastJsonMessage.user));
        }
    }, [lastJsonMessage])

    useEffect(() => {
        const handleLoggedUser = async () => {
            try{
                const data = await fetchUser();
                setUser(data);                
            }catch(err){
                console.error('Error fetching user data:', err);
            }

        }
        handleLoggedUser();
        handleFetch();
    }, [])

    useEffect(() => {
        if(users.length > 0){
            const data = handleOnlineUsersFetch(users);
            setOnlineUsers(data);
        }
    }, [users])

    return (
        <ScrollArea className="h-screen max-w-sm min-w-[300px] flex flex-col pr-3 dark:border-r-2 dark:pr-0">
            <Profile />
            <Search fetchUsers={handleFetch}/>
            <Users users={users} onlineUsers={onlineUsers}/> 
        </ScrollArea>
    )
}

export default Sidebar;