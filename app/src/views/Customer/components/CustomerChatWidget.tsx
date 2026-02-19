import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BOT_QUESTIONS } from "@/constants";

type ChatStatus = "AUTOMATED" | "AGENT" | "CLOSED";

type Message = {
  id: string;
  sender: "USER" | "BOT" | "AGENT" | "SYSTEM";
  content: string;
};

export const CustomerChatWidget = () => {
  const [status, setStatus] = useState<ChatStatus>("AUTOMATED");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleBotQuestion = (id: string) => {
    const bot = BOT_QUESTIONS.find((q) => q.id === id);
    if (!bot) return;

    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), sender: "USER", content: bot.question },
      { id: crypto.randomUUID(), sender: "BOT", content: bot.answer },
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

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "USER",
        content: input,
      },
    ]);

    setInput("");
    // Later: emit socket event
  };

  return (
    <>
      {/* Messages */}
      <ScrollArea className="flex-1 p-4 text-sm">
        <div className="space-y-2">
          {messages.map((m) => (
            <div key={m.id}>
              <strong>{m.sender}:</strong> {m.content}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t p-4 space-y-2">
        {/* BOT MODE */}
        {status === "AUTOMATED" && (
          <>
            {BOT_QUESTIONS.map((q) => (
              <Button
                key={q.id}
                variant="outline"
                className="w-full"
                onClick={() => handleBotQuestion(q.id)}
              >
                {q.question}
              </Button>
            ))}

            <Button className="w-full" onClick={talkToAgent}>
              Talk to agent
            </Button>
          </>
        )}

        {/* AGENT MODE */}
        {status === "AGENT" && (
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage}>Send</Button>
          </div>
        )}

        {/* CLOSED MODE */}
        {status === "CLOSED" && (
          <p className="text-xs text-muted-foreground">
            This conversation has ended.
          </p>
        )}
      </div>
    </>
  );
};
