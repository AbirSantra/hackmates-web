import AuthDivider from "@/components/auth/AuthDivider";
import SignInForm from "@/components/auth/SignInForm";
import SignUpWithGithub from "@/components/auth/SignUpWithGithub";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex w-full max-w-[340px] flex-col gap-6">
      <div className="flex flex-col">
        <h2 className="font-brand text-[28px] font-semibold tracking-normal text-zinc-950 antialiased">
          Welcome back!
        </h2>
        <p className="space-y-2 font-body text-xs font-medium text-muted-foreground">
          Don’t have an account yet?{" "}
          <a href={"/signup"} className="font-brand text-primary">
            Sign up
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <SignUpWithGithub />
        <AuthDivider />
        {/* sign up form */}
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
