// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photoUrl: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
  categoryName: string;
};

// ====== TRANSACTION PARAMS
export type CreateTransactionParams = {
  userId: string;
  transaction: {
    amount: number;
    date: Date;
    description: string;
    transactionType: "income" | "expense" | "transfer";
    merchantName: string;
    account: {
      _id: string;
      name: string;
    };
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
    transactionType: "income" | "expense" | "transfer";
    merchantName: string;
    account: {
      _id: string;
      name: string;
    };
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

// ====== ASSET PARAMS
export type CreateAssetParams = {
  _id: string;
  userClerkId: string;
  title: string;
  description?: string;
  currentAmount: number;
  changeAmount?: number;
  changePercentage?: number;
  createdDate?: Date;
  updatedDate?: Date;
  categoryId?: string;
};

export type UpdateAssetParams = {
  _id: string;
  title?: string;
  description?: string;
  currentAmount?: number;
  changeAmount?: number;
  changePercentage?: number;
  createdDate?: Date;
  updatedDate?: Date;
  categoryId?: string;
};

// ====== ACCOUNT PARAMS
export type CreateAccountParams = {
  userClerkId: string;
  name: string;
  type:
    | "checking"
    | "savings"
    | "cash"
    | "credit_card"
    | "investment"
    | "loan"
    | "other";
  currentAmount: number;
  institution?: string;
  lastFour?: string;
};

export type UpdateAccountParams = {
  _id: string;
  name?: string;
  type?:
    | "checking"
    | "savings"
    | "cash"
    | "credit_card"
    | "investment"
    | "loan"
    | "other";
  currentAmount?: number;
  institution?: string;
  lastFour?: string;
};

export type GetByUserParams = { userClerkId: string };
export type DeleteByIdParams = { _id: string };

// ====== GOAL PARAMS
export type CreateGoalParams = {
  userClerkId: string;
  title: string;
  targetAmount: number;
  targetDate?: Date;
  currentAmount?: number;
  priority?: number;
  status?: "active" | "paused" | "completed" | "overdue";
  categoryId?: string;
};

export type UpdateGoalParams = {
  _id: string;
  title?: string;
  targetAmount?: number;
  targetDate?: Date;
  currentAmount?: number;
  priority?: number;
  status?: "active" | "paused" | "completed" | "overdue";
  categoryId?: string;
};

// ====== LIABILITY PARAMS
export type CreateLiabilityParams = {
  userClerkId: string;
  title: string;
  description?: string;
  currentAmount: number;
  changeAmount?: number;
  changePercentage?: number;
  createdDate?: Date;
  updatedDate?: Date;
  categoryId?: string;
};

export type UpdateLiabilityParams = {
  _id: string;
  title?: string;
  description?: string;
  currentAmount?: number;
  changeAmount?: number;
  changePercentage?: number;
  createdDate?: Date;
  updatedDate?: Date;
  categoryId?: string;
};

// ====== REPORT PARAMS
export type CreateReportParams = {
  userClerkId: string;
  title: string;
  date: Date;
  type: "summary" | "net_worth" | "spending" | "income" | "custom";
  file: unknown;
};

export type UpdateReportParams = {
  _id: string;
  title?: string;
  date?: Date;
  type?: "summary" | "net_worth" | "spending" | "income" | "custom";
  file?: unknown;
};

// ====== BILLS PARAMS (align to existing Bill schema)
export type CreateBillParams = {
  userId: string;
  name: string;
  amount: number;
  dueDate: Date;
  category: { name: string; icon: string };
  isRecurring?: boolean;
  status?: "paid" | "unpaid" | "overdue";
  frequency?: "monthly" | "quarterly" | "yearly" | "weekly";
  accountId?: string;
  accountName?: string;
  notes?: string;
};

export type UpdateBillParams = {
  _id: string;
  name?: string;
  amount?: number;
  dueDate?: Date;
  category?: { name: string; icon: string };
  isRecurring?: boolean;
  status?: "paid" | "unpaid" | "overdue";
  frequency?: "monthly" | "quarterly" | "yearly" | "weekly";
  accountId?: string;
  accountName?: string;
  notes?: string;
};

export type GetBillsByUserParams = { userId: string };
