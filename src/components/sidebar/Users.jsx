import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const Users = () => {
    const users = [
        {'name':'Anna', 'message':'Hi guys, how are you', 'is_online':false},
        {'name':'Bob', 'message':'Fancy website', 'is_online':false},
        {'name':'Tylor', 'message':'I sent you the pics', 'is_online':true},
        {'name':'Shad', 'message':"Don't miss the dinner", 'is_online':false},
        {'name':'Tonny', 'message':"Tomorrow is My birthday", 'is_online':true},
        {'name':'Alan', 'message':'Hi guys, how are you', 'is_online':true},
        {'name':'Barbara', 'message':'Hi guys, how are you', 'is_online':false},
        {'name':'Gabriel', 'message':'Hi guys, how are you', 'is_online':true},
        {'name':'Tyson', 'message':'Hi guys, how are you', 'is_online':false},
        {'name':'Fanson', 'message':'Hi guys, how are you', 'is_online':false},
        {'name':'Zuck', 'message':'Hi guys, how are you', 'is_online':true},
    ]
    
    return(
        users.map((user) => (
            <Card className="py-2 border-none shadow-none hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-800 transition-color transition-shadow rounded-sm cursor-pointer">
                <div className="relative flex items-center gap-2 px-2">
                    <Avatar className="w-10 h-10 hover:border-2 transition-shadow">
                        <AvatarImage src="https://i.pravatar.cc/150"/>
                    </Avatar>
                    {user.is_online ? (
                        <div className="w-2 h-2 bg-green-400 rounded-full border-gray-50 border-2 box-content shadow-2xs absolute left-9 top-9"></div>
                    ) : null}
                    <div className="flex flex-col pt-2">
                        <p className="font-bold text-gray-800 dark:text-gray-300">{user.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{user.message}</p>
                    </div>
                </div>
            </Card>
        ))
    )
}

export default Users;