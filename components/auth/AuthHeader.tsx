"use client";

import React from "react";
import BrandLogoWithName from "../common/BrandLogoWithName";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";

interface viewType {
  view: "large" | "small";
}
const AuthHeader = ({ view }: viewType) => {
  const path = usePathname();

  return (
    <div
      className={`flex w-full items-center justify-between ${view === "large" ? "hidden lg:flex" : "lg:hidden "}`}
    >
      <div className={`self-start justify-self-start`}>
        <BrandLogoWithName />
      </div>
      {path === "/signup" ? (
        <Link href={"/signin"}>
          <span className="flex items-center gap-2 font-brand text-sm font-medium text-muted-foreground">
            Sign in
            <MoveRightIcon strokeWidth={2} />
          </span>
        </Link>
      ) : path === "/signin" ? (
        <Link href={"/signup"}>
          <span className="flex items-center gap-2 font-brand text-sm font-medium text-muted-foreground">
            Sign up
            <MoveRightIcon strokeWidth={2} />
          </span>
        </Link>
      ) : null}
    </div>
  );
};

export default AuthHeader;
