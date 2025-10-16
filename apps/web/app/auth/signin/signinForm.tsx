"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import { signIn } from "@/lib/auth";
import React from "react";
import { useActionState } from "react";

const SignInForm = () => {
  const [state, action] = useActionState(signIn, undefined);
  return (
    <form action={action}>
      <div className="flex flex-col gap-2 w-64">
        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            placeholder="john_doe"
            type = "text"
          />
        </div>
        {state?.error?.username && (
          <p className="text-sm text-red-500">{state.error.username}</p>
        )}

        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" name="password" />
        </div>
        {state?.error?.password && (
          <p className="text-sm text-red-500">{state.error.password}</p>
        )}

        <SubmitButton>Sign In</SubmitButton>
    
      </div>
    </form>
  );
};

export default SignInForm;
