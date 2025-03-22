"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { IWemaIcon } from "../../../../public/icons";
import BusinessInformation from "./components/business-information";
import { signupSchema, SignupSchemaType } from "./schema";
import BusinessAddress from "./components/business-address";

export default function LoginPage() {
  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      businessName: "",
      businessPhonenumber: "",
      businessEmail: "",
      businessCategory: "",
      accountNumber: "",
    },
  });

  async function onSubmit(values: SignupSchemaType) {
    console.warn(values);
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
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
      <section className="flex justify-center items-center my-auto">
        <div className="max-w-[32.625rem] bg-white p-10 w-full rounded-lg">
          <h5 className="font-medium text-[#039BF0] text-2xl mb-2">
            Welcome to Xpress Rewards
          </h5>
          <p className="text-[#606060] text-xs pb-4 mb-4 border-b-[2px] border-[#F5F6F8]">
            Complete the form below to get started
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <BusinessInformation form={form} />
              <BusinessAddress form={form} />
              <div className="flex gap-[15px] items-center mt-10">
                <Button type="submit" className="w-[40%]">
                  Next
                </Button>
                <p className="text-sm text-[#606060]"> Step 1 of 2</p>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </section>
  );
}
