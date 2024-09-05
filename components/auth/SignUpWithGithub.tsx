import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import GithubLogo from "@/public/assets/socials/github-white.svg";

const SignUpWithGithub = () => {
  return (
    <div>
      <Button
        type="button"
        className="w-full rounded-[6px] bg-zinc-900 font-brand font-medium tracking-normal hover:bg-black"
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
    </div>
  );
};

export default SignUpWithGithub;
