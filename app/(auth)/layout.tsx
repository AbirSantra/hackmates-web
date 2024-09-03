import Image from "next/image"
import AuthIllustration from '@/public/assets/AuthIllustr.svg'
import BrandLogo from "@/components/common/BrandLogo"
import Link from "next/link"

export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {

    const BrandCard = () => {
        return (
            <span className="flex flex-row gap-2 items-center">
                <span className="w-6 h-6">
                    <BrandLogo />
                </span>
                <p className="font-brand font-semibold text-lg">HackMates</p>
            </span>
        )
    }

    return (
        <div className="w-full h-dvh flex lg:flex-row flex-col-reverse relative bg-zinc-100">
            <Link href={'/'} className="absolute lg:top-12 lg:left-12 top-8 left-8">
                <BrandCard />
            </Link>
            <section className="lg:w-1/2 lg:h-dvh h-min flex flex-col items-center justify-center md:flex lg:rounded-r-[32px] rounded-t-[32px] lg:rounded-tl-none overflow-hidden bg-white">
                {children}
            </section>
            <section className="w-full flex md:flex-1 flex-col items-center justify-center select-none ">
                <Image
                    src={AuthIllustration}
                    alt="auth illustration"
                    width={600}
                    height={600}
                    className="lg:w-[500px] lg:h-[500px] w-80 h-80 object-cover"
                    placeholder="empty"
                    draggable="false"
                />
                <p className="hidden lg:block md:block font-brand font-semibold lg:text-3xl md:text-2xl text-center text-zinc-700">
                    Bringing teams together <br />
                    to turn ideas into reality
                </p>
            </section>
        </div>
    )
}