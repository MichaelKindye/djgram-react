import { useContext } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/relativeTime';
import { UserContext } from "@/services/context/userContext";

dayjs.extend(relativeTime);
dayjs.extend(utc);

const MessageBox = ({ message, handleDelete }) => {
    const { user } = useContext(UserContext);
    return(
        <div className="group max-w-full flex mx-2 my-3 gap-2 ">
            <Avatar className="w-10 h-10">
                <AvatarImage src="https://i.pravatar.cc/150"/>
            </Avatar>
            <div className="flex flex-col max-w-md items-end">
                { user.data.id == message.sender ? (
                    <p className="w-full flex justify-between text-gray-100 rounded-md px-2 py-2 bg-gray-900"
                    style={{ wordBreak: 'break-word' }}
                    >
                        {message.content}
                        <span className="text-gray-400 text-[12px] ml-5 flex items-end pt-4">{dayjs(message.timestamp).fromNow()}</span>
                    </p>                    
                )

                :   (
                        <p className="w-full flex justify-between text-gray-100 rounded-md px-2 py-2 bg-blue-700"
                        style={{ wordBreak: 'break-word' }}
                        >
                            {message.content}
                            <span className="text-gray-400 text-[12px] ml-5 flex items-end pt-4">{dayjs(message.timestamp).fromNow()}</span>
                        </p>
                    )        
                }

            </div>
            <div className="flex items-center justify-center">
                <button onClick={() => handleDelete(message)} className="group-hover:visible hover:text-red-600 ml-[100%] invisible text-gray-400 text-sm">
                    delete
                </button>
            </div>
        </div>
    )
}

export default MessageBox;