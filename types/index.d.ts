declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

declare interface User {
  firstname: string;
  lastname: string;
  imgURL: string;
  email: string;
  firstBank: number;
  secondBank: number;
}

declare interface SiderbarProps {
  user: User;
}

declare interface BrokerNameProps {
  name: string;
  imgURL: string;
}

declare interface SiderbarLinkProps {
  imgURL: string;
  route: string;
  label: string;
}

declare interface MobileNavProps {
  user: User;
}

declare interface RightSidebarProps {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}

// declare interface Metadata{

// }

declare interface CreditCardProps {
  account: Account;
  userName: string;
  showBalance?: boolean;
}

declare type AccountTypes =
  | "depository"
  | "credit"
  | "loan "
  | "investment"
  | "other";

declare type Transaction = {
  id: string;
  $id: string;
  name: string;
  paymentChannel: string;
  type: string;
  accountId: string;
  amount: number;
  pending: boolean;
  category: string;
  date: string;
  image: string;
  type: string;
  $createdAt: string;
  channel: string;
  senderBankId: string;
  receiverBankId: string;
};

declare type Category = "Food and Drink" | "Travel" | "Transfer";

declare type CategoryCount = {
  name: string;
  count: number;
  totalCount: number;
};

declare interface DoughnutChartProps {
  accounts: Account[];
}

declare interface TotlaBalanceBoxProps {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
}

declare type SignUpParams = {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
  email: string;
  password: string;
};
