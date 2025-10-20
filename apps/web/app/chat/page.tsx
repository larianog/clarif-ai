"use client"

import React from "react";

import ChatAI from "./chat";
import { Button } from "@/components/ui/button";

const ChatPage = () => {
  return (
    <div className = "h-screen flex items-center justify-center flex-col gap-10 container mx-auto">
     <h1 className="text-center text-2xl font-bold mb-4">
      ClarifAI
      </h1>

      <Button variant="outline" aria-label="Submit">
        Upload a document
      </Button>

      <ChatAI/>
    
    <hr />

</div>
  );
};

export default ChatPage;
