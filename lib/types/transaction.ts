export type Transaction = {
  _id: string;
  userId: string;
  date: string;
  amount: number;
  type: "income" | "expense" | "transfer";
  category: {
    id: string;
    name: string;
    icon: string;
    color: string;
    budget?: number;
  };
  description: string;
  merchant?: string;
  accountId: string;
  accountName: string;
  isRecurring: boolean;
  recurringId?: string;
  tags: string[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTransactionParams = {
  userId: string;
  transaction: {
    amount: number;
    date: Date;
    description: string;
    type: "income" | "expense" | "transfer";
    merchant: string;
    account: { _id: string; name: string };
    category: {
      _id: string;
      name: string;
      icon: string;
    };
  };
};

export type UpdateTransactionParams = {
  userId: string;
  transaction: {
    _id: string;
    amount: number;
    date: Date;
    description: string;
    type: "income" | "expense" | "transfer";
    merchant: string;
    account: { _id: string; name: string };
    category: {
      _id: string;
      name: string;
      icon: string;
    };
  };
};

export type DeleteTransactionParams = {
  transactionId: string;
};

export type GetUserTransactionParams = {
  userId: string;
};
