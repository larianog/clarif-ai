"use client"

import React from "react";

import ChatAI from "./chat";
import UploadButton from "../file/fileUpload";

const ChatPage = () => {
  return (
    <div className = "h-screen flex items-center justify-center flex-col gap-10 container mx-auto">
      <div className = "flex flex-col items-center">
        <h1 className="text-center text-2xl font-bold mb-4">
        ClarifAI
        </h1>
        <p>An image-to-text application integrated with a chatbot.</p>
        <p>Accepted file extensions: png, jpeg, gif and webp.</p>

        <UploadButton></UploadButton>
    
      </div>
      <ChatAI/>
    
    <hr />

</div>
  );
};

export default ChatPage;
