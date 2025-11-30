"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { deleteTransaction } from "@/database/actions/transaction.actions";
import { TransactionDialogProps } from "@/lib/types/transaction";

export function DeleteTransactionDialog({
  open,
  onOpenChange,
  transaction,
}: TransactionDialogProps) {
  if (!transaction) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Transaction</DialogTitle>
        </DialogHeader>

        <p>Are you sure you want to delete this?</p>

        <Button
          variant="destructive"
          onClick={() => {
            deleteTransaction(transaction._id);
            onOpenChange(false);
          }}
        >
          Confirm Delete
        </Button>
      </DialogContent>
    </Dialog>
  );
}
