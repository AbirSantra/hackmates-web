import Image from "next/image";
import AuthIllustration from "@/public/assets/AuthIllustr.svg";
import BrandLogo from "@/components/common/BrandLogo";
import Link from "next/link";
import BrandLogoWithName from "@/components/common/BrandLogoWithName";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-dvh w-full flex-col-reverse bg-zinc-100 lg:flex-row">
      <section className="flex h-full flex-col rounded-t-[32px] bg-white p-6 shadow-2xl md:flex lg:h-dvh lg:w-1/2 lg:rounded-r-[32px] lg:rounded-tl-none lg:shadow-sm">
        <div className="hidden self-start justify-self-start lg:flex">
          <BrandLogoWithName />
        </div>
        <div className="flex w-full flex-1 items-center justify-center">
          {children}
        </div>
      </section>
      <section className="flex w-full flex-1 select-none flex-col items-center gap-4 p-6 lg:justify-center">
        <div className="self-start justify-self-start lg:hidden">
          <BrandLogoWithName />
        </div>
        <div className="my-auto flex w-full max-w-sm lg:my-0 lg:max-w-lg">
          <Image
            src={AuthIllustration}
            alt="auth illustration"
            width={600}
            height={600}
            className="h-full w-full object-contain"
            placeholder="empty"
            draggable="false"
          />
        </div>
        <p className="hidden text-center font-brand font-semibold text-zinc-700 lg:block lg:text-3xl">
          Bringing teams together <br />
          to turn ideas into reality
        </p>
      </section>
    </div>
  );
}
