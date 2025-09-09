import  Sidebar from "@/components/home/sidebar/Sidebar";
import Messagebar from "@/components/home/messagebar/Messagebar";

const Home = () => {
    return(
        <div className="flex w-full h-screen dark:bg-gray-500">
          <Sidebar />
          <Messagebar />
        </div>
    )
}

export default Home;