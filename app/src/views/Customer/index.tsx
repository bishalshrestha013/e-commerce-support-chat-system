import { useState } from "react";
import { ChatLauncher, ChatSheet, CustomerChatWidget } from "./components";

const CustomerPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ChatSheet open={open} onOpenChange={setOpen}>
        <CustomerChatWidget />
      </ChatSheet>

      <ChatLauncher onClick={() => setOpen(true)} />
    </>
  );
};

export default CustomerPage;
