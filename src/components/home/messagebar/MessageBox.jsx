import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const MessageBox = ({ user }) => {
    return(
        <div className="max-w-full flex mx-2 my-3 gap-2 ">
            <Avatar className="w-10 h-10">
                <AvatarImage src="https://i.pravatar.cc/150"/>
            </Avatar>
            <div className="flex flex-col max-w-md items-end">
                <p className="max-w-md flex justify-between text-gray-100 break-words rounded-md px-2 py-2 bg-gray-900">
                    {user.message}
                    <pre className="text-gray-400 ml-5 flex items-end pt-4">{user.timestamp}</pre>
                </p>
            </div>
        </div>
            
    )
}

export default MessageBox;