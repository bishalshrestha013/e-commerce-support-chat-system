import { BOT_QUESTIONS } from "@/constants";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

type ChatStatus = "AUTOMATED" | "AGENT" | "CLOSED";

type Message = {
  id: string;
  sender: "USER" | "BOT" | "AGENT" | "SYSTEM";
  content: string;
};

export const CustomerChatWidget = () => {
  const [status, setStatus] = useState<ChatStatus>("AUTOMATED");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleBotClick = (id: string) => {
    const bot = BOT_QUESTIONS.find((q) => q.id === id);
    if (!bot) return;

    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "USER",
        content: bot.question,
      },
      {
        id: crypto.randomUUID(),
        sender: "BOT",
        content: bot.answer,
      },
    ]);
  };

  const talkToAgent = () => {
    if (status !== "AUTOMATED") return;

    setStatus("AGENT");
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "SYSTEM",
        content: "You are now connected to a support agent.",
      },
    ]);
  };

  return (
    <>
      <ScrollArea className="flex-1 p-4 text-sm">
        {messages.map((m) => (
          <div key={m.id}>
            <strong>{m.sender}:</strong> {m.content}
          </div>
        ))}
      </ScrollArea>

      <div className="border-t p-4 space-y-2">
        {status === "AUTOMATED" && (
          <>
            {BOT_QUESTIONS.map((q) => (
              <Button
                key={q.id}
                variant="outline"
                className="w-full"
                onClick={() => handleBotClick(q.id)}
              >
                {q.question}
              </Button>
            ))}

            <Button variant="outline" className="w-full" onClick={talkToAgent}>
              Talk to agent
            </Button>
          </>
        )}

        {status === "AGENT" && (
          <p className="text-xs text-muted-foreground">
            You are chatting with a live agent.
          </p>
        )}

        {status === "CLOSED" && (
          <p className="text-xs text-muted-foreground">
            This conversation has ended.
          </p>
        )}
      </div>
    </>
  );
};
