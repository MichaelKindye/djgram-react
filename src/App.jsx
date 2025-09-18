import { Route, Routes } from "react-router-dom";
import Home from '@/components/home/Home.jsx';
import Login from '@/components/login/login.jsx';
import SignUp from '@/components/signup/signup.jsx';

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