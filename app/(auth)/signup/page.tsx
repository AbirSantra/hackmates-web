"use client";

import AuthDivider from "@/components/auth/AuthDivider";
import SignUpForm from "@/components/auth/SignUpForm";
import SignUpWithGithub from "@/components/auth/SignUpWithGithub";
import { useParams } from "next/navigation";

const SignUpPage = () => {
  return (
    <div className="flex w-full max-w-[340px] flex-col gap-6">
      <div className="flex flex-col">
        <h2 className="font-brand text-[28px] font-semibold tracking-normal text-zinc-950 antialiased">
          Start building today!
        </h2>
        <p className="space-y-2 font-body text-xs font-semibold text-muted-foreground">
          Sign Up below to get started.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <SignUpWithGithub />
        <AuthDivider />

        {/* sign up form */}
        <SignUpForm />

        {/* policies section */}
        <span className="font-body text-xs text-muted-foreground">
          By creating an account you agree with our{" "}
          <a className="font-semibold text-primary" href="">
            Terms of Use
          </a>{" "}
          and our{" "}
          <a className="font-semibold text-primary" href="">
            Privacy Policy
          </a>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
