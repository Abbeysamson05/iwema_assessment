"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarList } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IWemaIcon } from "../../../../public/icons";

const UserSidebar: React.FC = () => {
  const path = usePathname();

  return (
    <div>
      <Sidebar className="shadow-md">
        <SidebarContent className={cn("px-6 py-10")}>
          <div className="mb-[50px]">
            <IWemaIcon />
          </div>
          <SidebarMenu className="flex flex-col gap-4">
            {sidebarList.map((item: any, index: number) => (
              <SidebarMenuItem
                key={item.id}
                className={`rounded-lg ${
                  path === item.link
                    ? "border-l-[4px] text-[#039BF0] border-[#039BF0] bg-[#F2FAFF]"
                    : "text-[#1A1619] hover:bg-[#F2FAFF] border-l-[4px] border-transparent hover:text-[#039BF0] hover:border-[#039BF0]"
                }`}
              >
                <SidebarMenuButton asChild className="px-6 py-[14px]">
                  <Link key={index} href={item.link}>
                    <div className="flex w-full items-center gap-4">
                      {/* <span>{item.icon}</span> */}
                      <h5 className="text-sm">{item.sidebar}</h5>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};
export default UserSidebar;
