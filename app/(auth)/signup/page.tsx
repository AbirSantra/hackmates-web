"use client";

import { Button } from "@/components/ui/button";
import {
  AtSign,
  Eye,
  Github,
  KeyRound,
  EyeOff,
  AtSignIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import GithubLogo from "@/public/assets/socials/github-white.svg";
import AppInput from "@/components/app-ui/AppInput";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import SignUpForm from "@/components/auth/SignUpForm";

const SignUpPage = () => {
  const HeaderCard = () => {
    return (
      <div className="flex flex-col">
        <h2 className="font-brand text-[28px] font-semibold tracking-normal text-zinc-950 antialiased">
          Start building today!
        </h2>
        <p className="space-y-2 font-body text-xs font-medium text-zinc-400">
          Already have an account?{" "}
          <a href={"/signin"} className="font-brand text-primary">
            Sign in
          </a>
        </p>
      </div>
    );
  };

  //github auth
  const GithubAuth = () => {
    return (
      <Button
        type="button"
        className="rounded-[6px] bg-zinc-900 font-brand font-medium tracking-normal hover:bg-black"
      >
        <Image
          src={GithubLogo}
          alt="github logo"
          width={24}
          height={24}
          draggable="false"
          className="mr-2 h-[18px] w-[18px]"
        />
        Continue with GitHub
      </Button>
    );
  };

  //policies footer card
  const FooterCard = () => {
    return (
      <span className="font-body text-xs text-zinc-400">
        By creating an account you agree with our{" "}
        <a className="font-semibold text-primary" href="">
          Terms of Use
        </a>{" "}
        and our{" "}
        <a className="font-semibold text-primary" href="">
          Privacy Policy
        </a>
      </span>
    );
  };
  return (
    <div className="flex w-full max-w-[340px] flex-col gap-6">
      <HeaderCard />
      <div className="flex flex-col gap-4">
        <GithubAuth />
        <div className="flex flex-row items-center justify-evenly gap-6 font-brand text-[10px] font-semibold text-zinc-500">
          <div className="w-full border-t border-dashed border-zinc-200"></div>
          OR
          <div className="w-full border-t border-dashed border-zinc-200"></div>
        </div>
        <SignUpForm />
        <FooterCard />
      </div>
    </div>
  );
};

export default SignUpPage;
