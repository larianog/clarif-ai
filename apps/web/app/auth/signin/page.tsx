import React from "react";
import SignInForm from "./signinForm";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center ">
      <h1 className="text-center text-2xl font-bold mb-4">
        Sign In Page
      </h1>

      <SignInForm />
      <hr />
      
      <div className="flex p-2 justify-between text-sm">
      <p> Don't have an account? </p>
        <Link className="text-sm underline" href="/auth/signup">
        Sign Up
        </Link>
      </div>

    </div>
  );
};

export default SignInPage;
