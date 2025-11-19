//login/page.jsx

'use client'

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';


const Form = () => {
    const router = useRouter();

    async function handleLogin(formData) {
        const response = await signIn("credentials", {
            redirect: false,
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
        });

        if (!response?.ok) {
            alert("Login gagal!");
            return;
        }

        const respon = await fetch('/api/auth/session');
        const data = await respon.json();
        const role = data?.user?.role;

        if (role !== 'admin') {
        redirect('/home');
        }else {
        redirect('/dashboard');
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="flex h-screen bg-black">
            <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300&display=swap" rel="stylesheet" />

            <div className="w-full md:w-2/5 bg-white flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <h1 className="text-4xl text-[#6DC700] mb-2" style={{ fontFamily: "'Happy Monkey', cursive" }}>Sign in</h1>
                    <p className="text-gray-600 mb-8 font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                        Enter your details to get sign in<br />to your account
                    </p>

                    <div className="space-y-4">
                        <form action={handleLogin} className="space-y-4">

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                            />

                            <div className="flex gap-3">
                                <div className="relative flex-1">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        id="password"
                                        name="password"
                                        className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                                    />
                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>

                                <div className="relative flex-1">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                                    />
                                    <button
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-[#9E8D6E] text-white py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors">
                                Sign In
                            </button>
                        </form>


                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-700 font-bold" styke={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>Have trouble in sign in?</span>
                                <a href="/register">
                                    <button className="text-green-600 font-medium hover:text-green-700">
                                        Sign Up
                                    </button>
                                </a>
                            </div>

                            <div className="flex items-center gap-3 my-6">
                                <div className="flex-1 h-px bg-gray-300"></div>
                                <span className="text-gray-500 text-sm">Or Sign in with</span>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>

                            <div className="flex gap-3">
                                <button className="flex-1 flex items-center justify-center gap-2 bg-[#9E8D6E] text-white py-3 rounded-lg hover:bg-amber-800 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    Google
                                </button>

                                <button className="flex-1 flex items-center justify-center gap-2 bg-[#9E8D6E] text-white py-3 rounded-lg hover:bg-amber-800 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                    Apple
                                </button>
                            </div>
                        </div>
                </div>
            </div>

            <div className="hidden md:block w-3/5 bg-[#f2f2f2]"></div>
        </div>
    );
}

export default Form