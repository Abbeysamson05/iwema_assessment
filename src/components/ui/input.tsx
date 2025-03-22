import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeClosedIcon, Search } from "lucide-react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border-1 bg-transparent px-3 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          " focus-visible:ring-ring/50",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {type === "password" ? (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={`absolute top-[50%] z-10 right-4 -translate-y-1/2 transform cursor-pointer`}
        >
          {showPassword ? (
            <EyeClosedIcon
              size={20}
              className="text-[#606060]"
              strokeWidth={2}
            />
          ) : (
            <Eye size={20} className="text-[#606060]" strokeWidth={2} />
          )}
        </button>
      ) : type === "search" ? (
        <div className="absolute left-4 top-[50%] -translate-y-1/2 transform">
          <Search size={24} className="text-[#808080]" />
        </div>
      ) : null}
    </div>
  );
}

export { Input };
