"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuthStore } from '@/store/auth-store'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const router = useRouter();
    const {authUser,isLoading, isError, loginUser} = useAuthStore();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        try {
            await loginUser(credentials);
            router.push('/dashboard');
        } catch (error) {
            console.log("Error during login:", error);
        }
    }

    if(authUser && !isLoading && !isError) {
        router.push('/dashboard');
    }

    return (
        <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
            <form
                onSubmit={handleSubmit}
                className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]">
                <div className="p-8 pb-6">
                    <div>
                        <h1 className="mb-2 text-xl font-semibold">Welcome to Carelytix <sup>(admin)</sup></h1>
                        <p className="text-sm mb-4">Please Enter your credentials</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label
                                htmlFor="email"
                                className="block text-sm">
                                Username
                            </Label>
                            <Input
                                type="email"
                                required
                                name="email"
                                value={credentials.email}
                                onChange={handleChange}
                                id="email"
                            />
                        </div>

                        <div className="space-y-0.5">
                            <Label
                                htmlFor="pwd"
                                className="text-sm">
                                Password
                            </Label>
                            <Input
                                type="password"
                                required
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                className="input sz-md variant-mixed"
                            />
                        </div>

                        <Button className="w-full">
                            { isLoading ? "Loading..." : "Login" }
                        </Button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default LoginForm