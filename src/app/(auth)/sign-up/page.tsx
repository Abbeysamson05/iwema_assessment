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
import { mockApi } from "@/service/mock-api";
import { useStore } from "@/zustand/store";
import { showErrorAlert, showSuccessAlert } from "@/lib/utils";
import { useHandlePush } from "@/hooks/use-handle-push";
import { ROUTES } from "@/constants/routes";
import { useSearchParams } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import SignupSuccess from "./components/success";

export default function LoginPage() {
  const { usersData, updateUserData } = useStore((state) => state);
  const [open, setOpen] = useState<boolean>(false);
  const params = useSearchParams();
  const activeTab = params.get("tab");
  const { handlePush } = useHandlePush();
  const { register } = mockApi;
  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      businessName: "",
      businessPhonenumber: "",
      businessEmail: "",
      businessCategory: "",
      accountNumber: "",
      houseNumber: "",
      street: "",
      city: "",
      state: "",
      contactName: "",
      contactNumber: "",
      contactEmail: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: SignupSchemaType) {
    console.warn(values);
    register({ userObj: values, usersData }).then((res) => {
      if (res.success) {
        showSuccessAlert(res?.message);
        updateUserData(res.result);
        setOpen(true);
      } else {
        showErrorAlert(res?.message || "User already exists");
      }
    });
  }
  const {
    trigger,
    formState: { errors },
  } = form;

  const handleNext = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      await trigger([
        "businessName",
        "businessEmail",
        "businessPhonenumber",
        "businessCategory",
        "accountNumber",
      ])
    ) {
      handlePush(`${ROUTES.AUTH.SIGNUP}?tab=business-details`);
    }
  };

  console.log(errors);

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
              {activeTab === "business-information" ? (
                <BusinessInformation form={form} />
              ) : (
                <BusinessAddress form={form} />
              )}
              <div className="flex gap-[15px] items-center mt-10">
                {activeTab === "business-details" && (
                  <Button
                    type="submit"
                    variant="outline"
                    className="w-[30%]"
                    onClick={(e: any) => {
                      e.preventDefault();
                      handlePush(
                        `${ROUTES.AUTH.SIGNUP}?tab=business-information`
                      );
                    }}
                  >
                    Back
                  </Button>
                )}
                <Button
                  type={
                    activeTab === "business-information" ? "button" : "submit"
                  }
                  className="w-[30%]"
                  onClick={(e: any) => {
                    if (activeTab === "business-information") {
                      handleNext(e);
                      return;
                    }
                  }}
                >
                  Next
                </Button>
                <p className="text-sm text-[#606060]">
                  Step {activeTab === "business-information" ? 1 : 2} of 2
                </p>
              </div>
            </form>
          </Form>
        </div>
      </section>
      <Dialog open={open} onOpenChange={() => handlePush(ROUTES.AUTH.SIGNIN)}>
        <DialogContent>
          <SignupSuccess closeModal={() => handlePush(ROUTES.AUTH.SIGNIN)} />
        </DialogContent>
      </Dialog>
    </section>
  );
}
