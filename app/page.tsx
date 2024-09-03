import BrandLogo from "@/components/common/BrandLogo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen flex items-center justify-center bg-primary">
        <div className="flex flex-col gap-2 select-none">
          <div className="flex flex-row gap-2 items-center">
            <span className="w-6 h-6">
              <BrandLogo iconOnly theme="dark" />
            </span>
            <h1 className="text-white font-bold font-brand text-xl tracking-normal">HackMates</h1>
          </div>
          <h3 className="text-white font-brand lg:text-4xl text-2xl font-bold antialiased tracking-normal">
            Bringing teams together <br />
            to turn ideas into reality.
          </h3>
        </div>
      </div>
    </main>
  );
}
