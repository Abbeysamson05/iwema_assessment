import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { Actions, Store } from "./interface";

export const authDataInitial = {
  businessName: "",
  contactName: "",
  businessCategory: "",
  accountNumber: "",
  businessPhonenumber: "",
  contactNumber: "",
  businessEmail: "",
  contactEmail: "",
  password: "",
  confirmPassword: "",
};

export const useStore = create<Store & Actions>()(
  devtools(
    persist(
      (set) => ({
        usersData: [],
        updateUserData: (data: any) => {
          set((state: Store) => ({ usersData: [...state.usersData, data] }));
        },
      }),
      {
        name: "zustand_store",
      }
    )
  )
);
