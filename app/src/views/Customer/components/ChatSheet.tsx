import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
};

export const ChatSheet = ({ open, onOpenChange, children }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-95 p-0 flex flex-col">
        <SheetHeader className="border-b px-4 py-3">
          <SheetTitle>Customer Support</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
