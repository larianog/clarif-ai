"use client"

import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import SubmitButton from '@/components/ui/submitButton'

const SignUpForm = () => {

    return (
        <form>
        <div className="flex flex-col gap-2">
            
        <div>
            <Label htmlFor="username">Account name</Label>
            <Input id="username" name="username" placeholder="john_doe" />
        </div>

        <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" />
        </div>

        <SubmitButton>Sign Up</SubmitButton>
        
        </div>
    </form>
    )
}

export default SignUpForm