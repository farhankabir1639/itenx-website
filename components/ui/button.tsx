import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[#00D8FF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0C10]";
    const variants = {
      default: "bg-[#00D8FF] text-[#0A0C10] hover:bg-[#00D8FF]/90",
      outline:
        "border border-white/20 bg-transparent text-slate-100 hover:bg-white/5",
      secondary: "bg-white/10 text-slate-100 hover:bg-white/20",
      ghost: "hover:bg-white/10",
      link: "text-[#00D8FF] underline-offset-4 hover:underline",
    };
    const sizes = {
      default: "h-10 px-5 py-2",
      sm: "h-9 rounded-md px-4",
      lg: "h-12 rounded-md px-8 text-base",
      icon: "size-10 rounded-md",
    };
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
