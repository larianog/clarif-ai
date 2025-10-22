"use client"

import { useState } from "react";
import ChatAI from "./chat";
import UploadButton from "../file/fileUpload";
import { UIMessage } from "@/lib/app/ui-message.interface";

const ChatPage = () => {
  const [messages, setMessages] = useState<UIMessage[]>([]);

  // função para adicionar mensagem ao chat
  const addMessage = (newMessage: UIMessage[]) => {
    setMessages((prev) => [...prev, ...newMessage]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-2xl font-bold mb-4">
          ClarifAI
        </h1>
        <p>An image-to-text application integrated with a chatbot.</p>
        <p>Accepted file extensions: png, jpeg, gif and webp.</p>

        <UploadButton onUploadMessage={addMessage} />
      </div>

      <ChatAI messages={messages} setMessages={setMessages} />

      <hr />
    </div>
  );
};

export default ChatPage;
