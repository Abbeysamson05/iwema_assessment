"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "./schema";
import Link from "next/link";
import { IWemaIcon } from "../../../../public/icons";
import { ROUTES } from "@/constants/routes";
import { useStore } from "@/zustand/store";
import { mockApi } from "@/service/mock-api";
import { showErrorAlert, showSuccessAlert } from "@/lib/utils";
import Storage from "@/lib/storage";

export default function LoginPage() {
  const { usersData } = useStore((state) => state);
  const { login } = mockApi;
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginSchemaType) {
    console.warn(values);
    login({ userObj: values, usersData }).then((res) => {
      if (res.success) {
        showSuccessAlert(res?.message);
        Storage.set("token", res?.userId);
        window.location.href = ROUTES.USER.VERIFIERS;
      } else {
        showErrorAlert(res?.message || "Invalid Credentials");
      }
    });
  }

  return (
    <section className="pb-[8rem] h-screen">
      <div className="flex justify-between pt-[2.5rem] px-[5.5rem] sticky top-0 bg-[#f5f6f8] z-10">
        <IWemaIcon />{" "}
        <div className="flex gap-2 items-center">
          <p className="text-sm text-[#606060]">Already have an account?</p>
          <Button
            variant="outline"
            size="xl"
            className="px-[1rem] py-[10px]"
            asChild
          >
            <Link href={`${ROUTES.AUTH.SIGNUP}?tab=business-information`}>
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
      <section className="flex justify-center items-center my-auto">
        <div className="max-w-[32.625rem] bg-white p-10 w-full rounded-lg">
          <h5 className="font-medium text-[#039BF0] text-2xl mb-2">
            Welcome Back!
          </h5>
          <p className="text-[#606060] text-xs pb-4 mb-4 border-b-[2px] border-[#F5F6F8]">
            Sign in to your Xpress reward partner’s dashboard
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-8">
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@revvapay.com"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        className="h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter Password"
                        className="h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mb-8 gap-2 flex items-center">
                <p className="text-sm text-[#606060]">Forgot Password?</p>
                <Link href="#" className="text-[#039BF0] font-medium text-sm">
                  Reset it
                </Link>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </section>
  );
}
