'use client';

import { v4 as uuidv4 } from 'uuid';

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputActionMenu,
  PromptInputBody,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input';
import { Action, Actions } from '@/components/ai-elements/actions';
import { Fragment, useState } from 'react';
import { Response } from '@/components/ai-elements/response';
import { CopyIcon } from 'lucide-react';
import { Loader } from '@/components/ai-elements/loader';
import { UIMessage } from "@/lib/app/ui-message.interface";
import createChatCompletion from "@/lib/createChatCompletion";

interface ChatAIProps {
  messages: UIMessage[];
  setMessages: React.Dispatch<React.SetStateAction<UIMessage[]>>;
}

const ChatAI = ( { messages, setMessages } : ChatAIProps) => {
  const [input, setInput] = useState('');
  //const [messages, setMessages] = useState<UIMessage[]>([]);

  const [status, setStatus] = useState('ready');
  

  const handleSubmit = async (message: PromptInputMessage) => {
    const textContent = message.text || "";
  
    // Convert user message into UIMessage
    const userMessage: UIMessage = {
      id: uuidv4(),
      role: 'user',
      parts: [{ type: 'text', text: textContent }],
    };
  
    // Update messages
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
  
    // Call backend
    setStatus('submitted');
    const response = await createChatCompletion(updatedMessages);
    
    setStatus('ready');

    setMessages([...updatedMessages, ...response]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full h-screen">
      <div className="flex flex-col h-full">
        <Conversation className="h-full">
          <ConversationContent>
            {messages.map((message) => (
              <div key={message.id}>
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case 'text':
                      return (
                        <Fragment key={`${message.id}-${i}`}>
                          <Message from={message.role}>
                            <MessageContent>
                              <Response>
                                {part.text}
                              </Response>
                            </MessageContent>
                          </Message>
                          {message.role === 'assistant' && i === messages.length - 1 && (
                            <Actions className="mt-2">
                              <Action
                                onClick={() =>
                                  navigator.clipboard.writeText(part.text)
                                }
                                label="Copy"
                              >
                                <CopyIcon className="size-3" />
                              </Action>
                            </Actions>
                          )}
                        </Fragment>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            ))}
            {status === 'submitted' && <Loader />}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput onSubmit={handleSubmit} className="mt-4" globalDrop multiple>
          <PromptInputBody>
            <PromptInputTextarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputActionMenu>
              </PromptInputActionMenu>
            </PromptInputTools>
            <PromptInputSubmit disabled={!input && !status} status={status as any} />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
};

export default ChatAI;