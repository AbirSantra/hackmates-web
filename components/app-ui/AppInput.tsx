import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

const AppInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, icon, label, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {/* lable text */}
        {label && (
          <Label className="font-brand text-[14px] text-zinc-500">
            {label}
          </Label>
        )}
        {/* input with icons */}
        <div className="flex items-center rounded-[6px] border-input pl-3 text-muted-foreground ring-1 ring-zinc-200 duration-200 ease-in-out focus-within:text-primary focus-within:ring-2 focus-within:ring-cyan-500">
          <span className="">{icon}</span>
          <Input
            id={id}
            type={type}
            ref={ref}
            {...props}
            className="group peer border-none font-body font-medium text-zinc-800 ring-offset-0 placeholder:text-zinc-400 focus-visible:ring-transparent focus-visible:ring-offset-0"
          />
        </div>
      </div>
    );
  }
);

AppInput.displayName = "AppInput";
export default AppInput;
