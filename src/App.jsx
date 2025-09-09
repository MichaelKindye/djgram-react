import { Route, Routes } from "react-router-dom";
import Home from '@/components/home/home';
import Login from '@/components/login/login';
import SignUp from '@/components/signup/signup';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  )
}

export default App;