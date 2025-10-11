import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { useContext } from "react";
import { OnlineUsersContext } from "@/services/context/userContext";

const Head = ({pairUser, pairUserTyping}) => {
    const { onlineUsers } = useContext(OnlineUsersContext);
    return (
    <Card className="w-full py-2 z-1 border-b-1 border-l-0 shadow-none transition-color transition-shadow rounded-none dark:bg-gray-900 bg-transparent flex">
        <div className="relative flex items-center gap-2 px-2">
            <Avatar className="w-12 h-12 transition-shadow cursor-pointer">
                <AvatarImage src="https://i.pravatar.cc/150"/>
                <AvatarFallback></AvatarFallback>
            </Avatar>            
            <div className="relative flex flex-col">
                <p className="font-bold text-gray-800">{pairUser?.name}</p>
                <div className="flex items-center gap-0.5 text-sm font-medium text-shadow-border text-purple-600 top-4.5 absolute">
                    { pairUserTyping ?
                        (
                            <>
                            <p>typing</p>
                            <span className="flex gap-0.5 absolute top-3 left-11">
                                <span className="animate-bounce delay-150 block w-0.5 h-0.5 bg-purple-600 rounded-full"></span>
                                <span className="animate-bounce delay-300 block w-0.5 h-0.5 bg-purple-600 rounded-full"></span>
                                <span className="animate-bounce delay-500 block w-0.5 h-0.5 bg-purple-600 rounded-full"></span>
                            </span>
                            </>
                        )
                    : onlineUsers.includes(pairUser.id) && !pairUserTyping ? <p className="text-green-600">online</p> : null
                    }
                </div>
            </div>
        </div>
    </Card>
    )

}


export default Head;