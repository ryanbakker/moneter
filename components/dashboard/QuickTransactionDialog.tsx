"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Popover, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

interface QuickTransactionDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

function QuickTransactionDialog({
  isOpen,
  onClose,
}: QuickTransactionDialogProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw]! h-full! max-w-[700px]! max-h-[700px]! overflow-scroll">
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
          <DialogDescription>
            Add an income or expense transaction to one of your accounts.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button>button</Button>
            </PopoverTrigger>
          </Popover>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default QuickTransactionDialog;
