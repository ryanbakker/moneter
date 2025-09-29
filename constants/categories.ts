import {
  Archive,
  BadgeDollarSign,
  BaggageClaim,
  Banknote,
  Brush,
  BrushCleaning,
  CarFront,
  CarTaxiFront,
  Cat,
  ChartNoAxesCombined,
  CircleDollarSign,
  Clapperboard,
  Droplets,
  Dumbbell,
  Fuel,
  Gem,
  GraduationCap,
  Hammer,
  Heart,
  Hospital,
  House,
  HousePlug,
  HouseWifi,
  Landmark,
  LandPlot,
  MapPin,
  Martini,
  Music,
  PersonStanding,
  Phone,
  PiggyBank,
  Plane,
  Receipt,
  ReceiptText,
  Ship,
  Shirt,
  ShoppingBag,
  ShoppingBasket,
  SquareParking,
  Star,
  Ticket,
  TrainFront,
  TrainTrack,
  TvMinimalPlay,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

export const categories = [
  {
    entertainment: [
      {
        id: "cinema",
        label: "Cinema",
        icon: Clapperboard,
      },
      {
        id: "concert",
        label: "Concert",
        icon: Music,
      },
      {
        id: "electronics",
        label: "Electronics",
        icon: Zap,
      },
      {
        id: "hobby",
        label: "Hobby",
        icon: Archive,
      },
      {
        id: "nightclub",
        label: "Nightclub",
        icon: Martini,
      },
      {
        id: "subscription",
        label: "Subscription",
        icon: TvMinimalPlay,
      },
      {
        id: "sports",
        label: "Sports",
        icon: LandPlot,
      },
      {
        id: "vacation",
        label: "Vacation",
        icon: BaggageClaim,
      },
      {
        id: "food-and-drink",
        label: "Food & Drink",
        icon: UtensilsCrossed,
      },
      {
        id: "event",
        label: "Event",
        icon: Ticket,
      },
      {
        id: "other-entertainment",
        label: "Other",
        icon: Archive,
      },
    ],
  },
  {
    housing: [
      {
        id: "bills",
        label: "Bills",
        icon: ReceiptText,
      },
      {
        id: "electricity",
        label: "Electricity",
        icon: HousePlug,
      },
      {
        id: "supplies",
        label: "Supplies",
        icon: BrushCleaning,
      },
      {
        id: "insurance",
        label: "Insurance",
        icon: Landmark,
      },
      {
        id: "internet",
        label: "Internet",
        icon: HouseWifi,
      },
      {
        id: "maintenance",
        label: "Maintenace",
        icon: Hammer,
      },
      {
        id: "rent",
        label: "Rent",
        icon: House,
      },
      {
        id: "taxes",
        label: "Taxes",
        icon: Landmark,
      },
      {
        id: "telephone",
        label: "Telephone",
        icon: Phone,
      },
      {
        id: "water",
        label: "Water",
        icon: Droplets,
      },
      {
        id: "other-housing",
        label: "Other",
        icon: House,
      },
    ],
  },
  {
    income: [
      {
        id: "child-benefit",
        label: "Child Benefit",
        icon: PersonStanding,
      },
      {
        id: "government-benefit",
        label: "Govenment Benefit",
        icon: Landmark,
      },
      {
        id: "income",
        label: "Income",
        icon: BadgeDollarSign,
      },
      {
        id: "interest",
        label: "Interest",
        icon: Landmark,
      },
      {
        id: "pension",
        label: "Pension",
        icon: CircleDollarSign,
      },
      {
        id: "salary",
        label: "Salary",
        icon: CircleDollarSign,
      },
      {
        id: "other-income",
        label: "Other",
        icon: Banknote,
      },
    ],
  },
  {
    lifestyle: [
      {
        id: "gym",
        label: "Gym",
        icon: Dumbbell,
      },
      {
        id: "groceries",
        label: "Groceries",
        icon: ShoppingBasket,
      },
      {
        id: "charity",
        label: "Charity",
        icon: Heart,
      },
      {
        id: "community",
        label: "Community",
        icon: Heart,
      },
      {
        id: "doctor",
        label: "Doctor",
        icon: Hospital,
      },
      {
        id: "education",
        label: "Education",
        icon: GraduationCap,
      },
      {
        id: "gift",
        label: "Gift",
        icon: Heart,
      },
      {
        id: "pet",
        label: "Pet",
        icon: Cat,
      },
      {
        id: "pharmacy",
        label: "Pharmacy",
        icon: Hospital,
      },
      {
        id: "shopping",
        label: "Shopping",
        icon: ShoppingBag,
      },
      {
        id: "other-lifestyle",
        label: "Other",
        icon: Heart,
      },
    ],
  },
  {
    savings: [
      {
        id: "emergency-savings",
        label: "Emergency Savings",
        icon: Star,
      },
      {
        id: "savings-general",
        label: "Savings",
        icon: PiggyBank,
      },
      {
        id: "vaction-savings",
        label: "Vacation Savings",
        icon: Plane,
      },
      {
        id: "other-savings",
        label: "Other",
        icon: PiggyBank,
      },
    ],
  },
  {
    transport: [
      {
        id: "car-costs",
        label: "Car Costs",
        icon: CarFront,
      },
      {
        id: "car-insurance",
        label: "Car Insurance",
        icon: Landmark,
      },
      {
        id: "car-loan",
        label: "Car Loan",
        icon: Landmark,
      },
      {
        id: "flights",
        label: "Flights",
        icon: Plane,
      },
      {
        id: "gas",
        label: "Gas",
        icon: Fuel,
      },
      {
        id: "parking",
        label: "Parking",
        icon: SquareParking,
      },
      {
        id: "public-transport",
        label: "Public Transport",
        icon: TrainFront,
      },
      {
        id: "repairs",
        label: "Repairs",
        icon: CarFront,
      },
      {
        id: "taxi",
        label: "Taxi",
        icon: CarTaxiFront,
      },
      {
        id: "other-transport",
        label: "Other",
        icon: TrainTrack,
      },
    ],
  },
  {
    assets: [
      {
        id: "stock-portfolio",
        label: "Stock Portfolio",
        icon: ChartNoAxesCombined,
      },
      {
        id: "real-estate",
        label: "Real Estate",
        icon: House,
      },
      {
        id: "vehicle",
        label: "Vehicle",
        icon: CarFront,
      },
      {
        id: "land",
        label: "Land",
        icon: MapPin,
      },
      {
        id: "boat",
        label: "Boat",
        icon: Ship,
      },
      {
        id: "precious-metal",
        label: "Precious Metal",
        icon: Gem,
      },
      {
        id: "artwork",
        label: "Artwork",
        icon: Brush,
      },
      {
        id: "other-assets",
        label: "Other",
        icon: ChartNoAxesCombined,
      },
    ],
  },
  {
    liabilities: [
      {
        id: "home-loan",
        label: "Home Loan",
        icon: Landmark,
      },
      {
        id: "student-loan",
        label: "Student Loan",
        icon: Landmark,
      },
      {
        id: "bank-loan",
        label: "Bank Loan",
        icon: Landmark,
      },
      {
        id: "due-bill",
        label: "Due Bill",
        icon: ReceiptText,
      },
      {
        id: "rent-arrears",
        label: "Rent Arrears",
        icon: Landmark,
      },
      {
        id: "debt",
        label: "Debt",
        icon: Landmark,
      },
      {
        id: "other-liabilities",
        label: "Other",
        icon: Receipt,
      },
    ],
  },
  {
    misc: [
      {
        id: "bank-cost",
        label: "Bank Cost",
        icon: Landmark,
      },
      {
        id: "clothes",
        label: "Clothes",
        icon: Shirt,
      },
      {
        id: "healthcare",
        label: "Healthcare",
        icon: Hospital,
      },
      {
        id: "unknown",
        label: "Unkown",
        icon: Archive,
      },
      {
        id: "other-misc",
        label: "Other",
        icon: CircleDollarSign,
      },
    ],
  },
];
