import  Sidebar from "@/components/sidebar/Sidebar";
import Messagebar from "@/components/messagebar/Messagebar";

const App = () => {
  return (
        <div className="flex w-full h-screen dark:bg-gray-500">
        <Sidebar />
        <Messagebar />
        </div>
    )
}

export default App;