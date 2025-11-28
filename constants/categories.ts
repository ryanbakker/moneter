// Financial Categories for the entire application
export const financialCategories = {
  // Income categories
  income: [
    { name: "Salary", icon: "DollarSign" },
    { name: "Freelance", icon: "Briefcase" },
    { name: "Investment Returns", icon: "TrendingUp" },
    { name: "Business Income", icon: "Building2" },
    { name: "Rental Income", icon: "Home" },
    { name: "Interest", icon: "PiggyBank" },
    { name: "Dividends", icon: "Coins" },
    { name: "Capital Gains", icon: "BarChart3" },
    { name: "Gifts", icon: "Gift" },
    { name: "Refunds", icon: "ArrowLeft" },
    { name: "Other Income", icon: "Plus" },
  ],

  // Expense categories
  expenses: [
    { name: "Food & Dining", icon: "Utensils" },
    { name: "Transportation", icon: "Car" },
    { name: "Housing", icon: "Home" },
    { name: "Utilities", icon: "Zap" },
    { name: "Healthcare", icon: "Heart" },
    { name: "Entertainment", icon: "Gamepad2" },
    { name: "Shopping", icon: "ShoppingBag" },
    { name: "Education", icon: "GraduationCap" },
    { name: "Travel", icon: "Plane" },
    { name: "Insurance", icon: "Shield" },
    { name: "Taxes", icon: "FileText" },
    { name: "Subscriptions", icon: "CreditCard" },
    { name: "Personal Care", icon: "Scissors" },
    { name: "Pets", icon: "Heart" },
    { name: "Gifts", icon: "Gift" },
    { name: "Charity", icon: "HeartHandshake" },
    { name: "Other Expenses", icon: "Minus" },
  ],

  // Bill categories
  bills: [
    { name: "Rent/Mortgage", icon: "Home" },
    { name: "Electricity", icon: "Zap" },
    { name: "Water", icon: "Droplets" },
    { name: "Gas", icon: "Zap" },
    { name: "Internet", icon: "Wifi" },
    { name: "Phone", icon: "Smartphone" },
    { name: "Cable TV", icon: "Tv" },
    { name: "Insurance", icon: "Shield" },
    { name: "Credit Card", icon: "CreditCard" },
    { name: "Loan Payment", icon: "Banknote" },
    { name: "Property Tax", icon: "Building2" },
    { name: "HOA Fees", icon: "Building2" },
    { name: "Garbage", icon: "Trash2" },
    { name: "Other Bills", icon: "FileText" },
  ],

  // Asset categories
  assets: [
    { name: "Cash", icon: "DollarSign" },
    { name: "Checking Account", icon: "CreditCard" },
    { name: "Savings Account", icon: "PiggyBank" },
    { name: "Investment Account", icon: "TrendingUp" },
    { name: "Retirement Account", icon: "Target" },
    { name: "Real Estate", icon: "Home" },
    { name: "Vehicle", icon: "Car" },
    { name: "Jewelry", icon: "Gem" },
    { name: "Collectibles", icon: "Star" },
    { name: "Business", icon: "Building2" },
    { name: "Cryptocurrency", icon: "Coins" },
    { name: "Precious Metals", icon: "Gem" },
    { name: "Art", icon: "Palette" },
    { name: "Other Assets", icon: "Plus" },
  ],

  // Liability categories
  liabilities: [
    { name: "Credit Card Debt", icon: "CreditCard" },
    { name: "Student Loan", icon: "GraduationCap" },
    { name: "Car Loan", icon: "Car" },
    { name: "Mortgage", icon: "Home" },
    { name: "Personal Loan", icon: "Banknote" },
    { name: "Business Loan", icon: "Building2" },
    { name: "Medical Debt", icon: "Heart" },
    { name: "Tax Debt", icon: "FileText" },
    { name: "Other Debt", icon: "Minus" },
  ],

  // Goal categories
  goals: [
    { name: "Emergency Fund", icon: "Shield" },
    { name: "Retirement", icon: "Target" },
    { name: "Home Purchase", icon: "Home" },
    { name: "Vehicle Purchase", icon: "Car" },
    { name: "Education", icon: "GraduationCap" },
    { name: "Travel", icon: "Plane" },
    { name: "Wedding", icon: "Heart" },
    { name: "Business Startup", icon: "Building2" },
    { name: "Investment Portfolio", icon: "TrendingUp" },
    { name: "Debt Payoff", icon: "CreditCard" },
    { name: "Other Goals", icon: "Flag" },
  ],

  // Budget categories
  budgets: [
    { name: "Housing", icon: "Home" },
    { name: "Transportation", icon: "Car" },
    { name: "Food", icon: "Utensils" },
    { name: "Utilities", icon: "Zap" },
    { name: "Healthcare", icon: "Heart" },
    { name: "Entertainment", icon: "Gamepad2" },
    { name: "Shopping", icon: "ShoppingBag" },
    { name: "Education", icon: "GraduationCap" },
    { name: "Insurance", icon: "Shield" },
    { name: "Savings", icon: "PiggyBank" },
    { name: "Debt Payment", icon: "CreditCard" },
    { name: "Other", icon: "Plus" },
  ],
};

// Helper function to get categories by type
export const getCategoriesByType = (type: keyof typeof financialCategories) => {
  return financialCategories[type] || [];
};

// Helper function to get all category names by type
export const getCategoryNamesByType = (
  type: keyof typeof financialCategories
) => {
  return financialCategories[type]?.map((cat) => cat.name) || [];
};

// Helper function to find category by name and type
export const findCategoryByName = (
  type: keyof typeof financialCategories,
  name: string
) => {
  return financialCategories[type]?.find((cat) => cat.name === name);
};
