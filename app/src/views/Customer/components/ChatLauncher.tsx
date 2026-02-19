import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  onClick: () => void;
};

export const ChatLauncher = ({ onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
    >
      <MessageCircle />
    </Button>
  );
};
