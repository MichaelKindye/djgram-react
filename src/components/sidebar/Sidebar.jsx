import  Search  from "@/components/sidebar/Search";
import  Profile  from "@/components/sidebar/Profile";
import Users from "@/components/sidebar/Users";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = () => {
    return (
        <ScrollArea className="h-screen max-w-sm min-w-[300px] flex flex-col pr-3 dark:border-r-2 dark:pr-0">
            <Profile />
            <Search />
            <Users /> 
        </ScrollArea>
    )
}

export default Sidebar;