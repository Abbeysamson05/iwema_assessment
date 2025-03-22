import { generateTokenID } from "@/lib/utils";
import { onboardProps } from "@/zustand/interface";

export const mockApi = {
  login: async ({
    userObj,
    usersData,
  }: {
    userObj: { email: string; password: string };
    usersData: onboardProps[];
  }) => {
    const user = usersData.find(
      (u) =>
        u.businessEmail === userObj.email && u.password === userObj.password
    );
    if (user) {
      const token = generateTokenID(35);
      return {
        success: true,
        message: "Login successful",
        userId: token,
        token: "token",
      };
    } else {
      return { success: false, message: "Invalid username or password" };
    }
  },

  register: async ({
    userObj,
    usersData,
  }: {
    userObj: onboardProps;
    usersData: onboardProps[];
  }) => {
    const existingUser = usersData.find(
      (u) => u.businessEmail === userObj.businessEmail
    );
    if (existingUser) {
      return { success: false, message: "Email already exists" };
    } else {
      return {
        success: true,
        message: "Registration successful",
        result: userObj,
      };
    }
  },
};
