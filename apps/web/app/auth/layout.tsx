import React, { PropsWithChildren } from 'react'

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className = 'bg-black h-screen flex items-center justify-center'>
        {children}
    </div>
  )
}

export default AuthLayout