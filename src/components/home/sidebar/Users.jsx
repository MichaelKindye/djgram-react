import { useState, useEffect, useContext } from "react";
import { fetchUsers } from "@/services/api/API";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { PairUserContext } from '@/services/context/userContext';
import { array } from "zod";

const Users = ({users, onlineUsers}) => {
    const { pairUser, setPairUser } = useContext(PairUserContext);
    return(
        users.map((user) => (
            <Card key={user.id} className="py-2 border-none shadow-none hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-800 transition-color transition-shadow rounded-sm cursor-pointer"
                  onClick={() => {
                    if(pairUser != user.id){
                        setPairUser(user);
                        console.log('setted pair user:', pairUser);
                    }
                    }}
            >
                <div className="relative flex items-center gap-2 px-2">
                    <Avatar className="w-10 h-10 hover:border-2 transition-shadow">
                        <AvatarImage src="https://i.pravatar.cc/150"/>
                    </Avatar>
                    {Array.isArray(onlineUsers) && onlineUsers.includes(user.id) ? (
                        <div className="w-2 h-2 bg-green-400 rounded-full border-gray-50 border-2 box-content shadow-2xs absolute left-9 top-7"></div>
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