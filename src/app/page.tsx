import { Button } from "@/components/ui/button";
import { IWemaIcon } from "../../public/icons";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function Home() {
  return (
    <div
      className="bg-[url('/images/iWema.jpg')] bg-cover w-screen"
      style={{ height: "100vh" }}
    >
      <div className="flex justify-between py-[1.5rem] px-[5.5rem] sticky top-0 bg-[#f5f6f8] z-10">
        <IWemaIcon />
        <div className="flex gap-2 items-center">
          <Button size="xl" className="px-[1rem] py-[10px]" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
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
    </div>
  );
}
