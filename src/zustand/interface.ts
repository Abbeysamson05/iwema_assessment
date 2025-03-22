export interface onboardProps {
  businessName: string;
  contactName: string;
  businessCategory: string;
  accountNumber: string;
  businessPhonenumber: string;
  contactNumber: string;
  businessEmail: string;
  contactEmail: string;
  password: string;
  confirmPassword: string;
}

export type Store = {
  usersData: onboardProps[];
};

export type Actions = {
  updateUserData: (data: any) => void;
};
