"use client"

import React, { useState } from "react";
import { IconPlus } from "@tabler/icons-react"
import { ArrowUpIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import ChatAI from "./chat";

const ChatPage = () => {
    const [message, setMessage] = useState("");
    
  return (
    <ChatAI/> /*
    <div className = "h-screen flex items-center justify-center flex-col gap-10 container mx-auto">
     <h1 className="text-center text-2xl font-bold mb-4">
        Chat Page
      </h1>

    <div className="grid w-full max-w-sm gap-6">

      <InputGroup>
        <InputGroupTextarea placeholder="Ask your question" />
        <InputGroupAddon align="block-end">
          <InputGroupButton
            variant="outline"
            className="rounded-full"
            size="icon-xs"
          >
            <IconPlus />
          </InputGroupButton>

          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      
    </div>
    <hr />

</div>*/
  );
};

export default ChatPage;
