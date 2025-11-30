"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import { categoryIconMap } from "@/constants/categories";
import { TransactionDialogProps } from "@/lib/types/transaction";
import { formatDate, formatToDollars } from "@/lib/utils";

export function ViewTransactionDialog({
  open,
  onOpenChange,
  transaction,
}: TransactionDialogProps) {
  if (!transaction) return null;

  const Icon = categoryIconMap[transaction.category.name];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="dialog-content">
        <DialogHeader>
          <DialogTitle className="dialog-title">
            Transaction Details
          </DialogTitle>

          <Separator className="dialog-seperator" />
        </DialogHeader>

        <div className="space-y-2">
          <FieldGroup>
            <FieldSet>
              <Field>
                <FieldLabel
                  htmlFor="transaction-view-description"
                  className="dialog-field-label"
                >
                  Description
                </FieldLabel>
                <div
                  id="transaction-view-description"
                  className="dialog-field-container"
                >
                  {transaction.description}
                </div>
              </Field>

              <FieldGroup>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel
                      htmlFor="transaction-view-amount"
                      className="dialog-field-label"
                    >
                      Amount
                    </FieldLabel>
                    <div
                      id="transaction-view-amount"
                      className="dialog-field-container"
                    >
                      {formatToDollars(transaction.amount)}
                    </div>
                  </Field>

                  <Field>
                    <FieldLabel
                      htmlFor="transaction-view-date"
                      className="dialog-field-label"
                    >
                      Date
                    </FieldLabel>
                    <div
                      id="transaction-view-date"
                      className="dialog-field-container"
                    >
                      {formatDate(transaction.date)}
                    </div>
                  </Field>

                  <Field>
                    <FieldLabel
                      htmlFor="transaction-view-merchant"
                      className="dialog-field-label"
                    >
                      Merchant
                    </FieldLabel>
                    <div
                      id="transaction-view-merchant"
                      className="dialog-field-container"
                    >
                      {transaction.merchant}
                    </div>
                  </Field>

                  <Field>
                    <FieldLabel
                      htmlFor="transaction-view-account"
                      className="dialog-field-label"
                    >
                      Account
                    </FieldLabel>
                    <div
                      id="transaction-view-account"
                      className="dialog-field-container"
                    >
                      {transaction.accountName}
                    </div>
                  </Field>

                  <Field>
                    <FieldLabel
                      htmlFor="transaction-view-category"
                      className="dialog-field-label"
                    >
                      Category
                    </FieldLabel>
                    <div
                      id="transaction-view-category"
                      className="dialog-field-container"
                    >
                      <span className="flex flex-row items-center gap-1">
                        <Icon size={16} className="m-0 p-0" />
                        {transaction.category.name}
                      </span>
                    </div>
                  </Field>

                  <Field>
                    <FieldLabel
                      htmlFor="transaction-view-type"
                      className="dialog-field-label"
                    >
                      Type
                    </FieldLabel>
                    <div
                      id="transaction-view-type"
                      className="dialog-field-container"
                    >
                      <span className="capitalize">{transaction.type}</span>
                    </div>
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </div>

        <DialogFooter className="mt-1.5">
          <Button type="submit" variant="glass-secondary">
            Edit
          </Button>
          <DialogClose asChild>
            <Button variant="glass-primary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
