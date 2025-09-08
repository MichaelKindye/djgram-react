import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import  Menu  from "@/assets/menu.svg";

const Profile = () => {
    return(
        <Card className="h-18 mb-2 bg-accent-foreground dark:bg-gray-900 flex justify-center px-2 cursor-pointer hover:shadow-purple-950 hover:border-2 transition-color transition-shadow">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="https://i.pravatar.cc/150"/>
                        <AvatarFallback>Haile</AvatarFallback>
                    </Avatar>
                    <div className="text-gray-200 font-bold">You</div>
                </div>
                <div className="w-10 h-10 flex justify-center p-2">
                    <svg className="hover:fill-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#d8d8d8ff"><path d="M140-254.62v-59.99h680v59.99H140ZM140-450v-60h680v60H140Zm0-195.39v-59.99h680v59.99H140Z"/></svg>        
                </div>
            </div>
        </Card>    
    )
}

export default Profile;