import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import axios, { Axios } from "axios";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import LoginArrow from '@/assets/login-arrow.svg';
import EmailSvg from '@/assets/email.svg';
import LockSvg from '@/assets/lock.svg';
import Visible from '@/assets/password-visible.svg';
import Invisible from '@/assets/password-invisible.svg';
import Account from '@/assets/account.svg';

const SignUpSchema = z.object({
    'username':z.string().min(3, 'Invalid username'),
    'email':z.email('Invalid email'),
    'password':z.string().min(6, 'Password must be at least 6 characters')
})

const SignUp = () => {
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
           const res = await axios.post('http://127.0.0.1:8000/register/', data)
            console.log('response: ', res.data.access)
            navigate('/login')
        } catch(err){
            console.error('error: ', err.response?.data || err.message )
            alert(err.response?.data.error || err.message)
        } finally{
            setLoading(false)
        }
    }

    return(
        <Card className="h-screen bg-gradient-to-t from-pink-400 via-blue-300 to-purple-300 flex flex-col items-center">
            <CardContent className="min-h-[70%] mad-w-sm border border-gray-200 bg-white/30 rounded-sm flex flex-col items-center py-10 mt-10">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                </div>
                <h2 className="text-[24px]">Create your account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-10">
                    <div className="bg-gray-200/50 flex items-center  rounded-full px-2">
                        <label htmlFor="username"><img src={Account} /></label>
                        <Input placeholder="Username" id="username" className="border-none focus-visible:ring-0" {...register("username")}/>
                    </div>
                    {errors.username && (<p className="text-red-500">{errors.username.message}</p>)}
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
                        {loading? "Signing in...":"Sign In"}
                    </Button>
                    
                </form>
            </CardContent>
        </Card>
    )
}

export default SignUp;