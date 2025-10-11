import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import LoginArrow from '@/assets/login-arrow.svg';
import EmailSvg from '@/assets/email.svg';
import LockSvg from '@/assets/lock.svg';
import Visible from '@/assets/password-visible.svg';
import Invisible from '@/assets/password-invisible.svg';
import { api } from "@/services/api/API";


const SignUpSchema = z.object({
    'email':z.email('Invalid email'),
    'password':z.string().min(4, 'Password must be at least 6 characters')
})

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [passwordType, setPasswordType] = useState('password')

    const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver:zodResolver(SignUpSchema)
    })

    const navigate = useNavigate()
    const onSubmit = async (data) => {
        setLoading(true)
        setPasswordType("password")
        try{
           const res = await api.post('/api/login/', data, {withCredentials: true})
            console.log('response: ', res.data.access)
            navigate('/')
        } catch(err){
            console.error('error: ', err.response?.data || err.message )
            alert(err.response?.data.error || err.message)
        } finally{
            setLoading(false)
        }
    }

    return(
        <Card className="h-screen bg-gradient-to-t from-pink-400 via-blue-300 to-purple-300 flex flex-col items-center rounded-none">
            <CardContent className="min-h-[70%] max-w-sm border border-gray-200 bg-white/30 rounded-sm flex flex-col items-center py-10 mt-10">
                <div>
                    <img src={LoginArrow} alt="" />
                </div>
                <h2 className="text-[24px]">Login with your email</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-10">
                    <div className="bg-gray-200/50 flex items-center  rounded-full px-2">
                        <label htmlFor="email"><img src={EmailSvg} /></label>
                        <Input placeholder="Email" id="email" className="border-none focus-visible:ring-0" {...register("email")}/>
                    </div>
                    {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
                    <div className="bg-gray-200/50 flex items-center rounded-full px-2">
                        <label htmlFor="password"><img src={LockSvg} /></label>
                        <Input placeholder="Password" id="password" type={passwordType} className="border-none focus-visible:ring-0 rounded-none" {...register("password")}/>
                        <div onClick={() => setPasswordType(passwordType == "password"? "text":"password")}>
                            <img src={passwordType == "password"? Invisible: Visible} alt="" />
                        </div>
                    </div>
                    {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
                    <Button type="submit" className="w-full cursor-pointer mt-6" disabled={loading}>
                        {loading? "Logging in...":"Login"}
                    </Button>
                    
                </form>
            </CardContent>
        </Card>
    )
}

export default Login;