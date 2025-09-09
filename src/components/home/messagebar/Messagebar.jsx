import Head from "@/components/home/messagebar/Head";
import MessageBox from "@/components/home/messagebar/MessageBox";
import MessageInput from "@/components/home/messagebar/MessageInput";

const Messagebar = () => {
    const users = [
    { name: "Denis", message: "Hey, how’s it going?", timestamp: "2 mins ago" },
    { name: "Sophia", message: "Did you finish the React project?", timestamp: "5 mins ago" },
    { name: "Marcus", message: "Yo, wanna hop on a call?", timestamp: "12 mins ago" },
    { name: "Aisha", message: "Just sent you the files!", timestamp: "25 mins ago" },
    { name: "Liam", message: "That bug was annoying but I fixed it.", timestamp: "40 mins ago" },
    { name: "Noah", message: "Lunch break? I’m starving lol", timestamp: "1 hour ago" },
    { name: "Isabella", message: "Let’s pair program later.", timestamp: "2 hours ago" },
    { name: "Ethan", message: "I pushed the latest commit.", timestamp: "3 hours ago" },
    { name: "Olivia", message: "Good morning team 🌞", timestamp: "5 hours ago" },
    { name: "Mason", message: "The new design looks clean af.", timestamp: "Yesterday" },
    { name: "Emma", message: "Don’t forget tomorrow’s meeting.", timestamp: "Yesterday" },
    { name: "Lucas", message: "I’ll check that PR tonight.", timestamp: "2 days ago" },
    { name: "Ava", message: "Frontend is basically done ✅", timestamp: "3 days ago" },
    { name: "James", message: "Backend API is up and running.", timestamp: "Last week" },
    { name: "Mia", message: "We should celebrate when we ship 🚀", timestamp: "2 weeks ago"},
    ];

    return(
        <div className="h-screen max-w-full flex-1 flex flex-col overflow-hidden">
            <Head />
            <div className="overflow-y-auto">
            {users.map((user) => (
                <MessageBox user={user}/>
            ))}  
            </div>
            <MessageInput className="flex-1"/>
        </div>
    )
}

export default Messagebar;