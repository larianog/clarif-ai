"use client"

import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useActionState } from 'react'
import { signUp } from '@/lib/auth'
import SubmitButton from '@/components/ui/submitButton'

const SignUpForm = () => {
    const [state, action] = useActionState(signUp, undefined);

    return (
        <form action={action}>
        <div className="flex flex-col gap-2 w-64">
            
        <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" placeholder="john_doe" />
        </div>

        {state?.error?.username && (
            <div className="text-sm text-red-500">
                <p>Username must:</p>
                <ul>
                {state.error.username.map((error) => (
                    <li key={error}>{error}</li>
                ))}
                </ul>
            </div>
            )}

        <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" />
        </div>
        {state?.error?.password && (
            <div className="text-sm text-red-500">
                <p>Password must:</p>
                <ul>
                {state.error.password.map((error) => (
                    <li key={error}>{error}</li>
                ))}
                </ul>
            </div>
            )}
        
        {state?.message && (
          <p className="text-sm text-red-500 justify-center">{state.message}</p>
        )}

        <SubmitButton>Sign Up</SubmitButton>
        
        </div>
    </form>
    )
}

export default SignUpForm