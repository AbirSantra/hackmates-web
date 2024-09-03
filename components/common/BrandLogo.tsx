import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import BrandDefault from '@/public/assets/brand/BrandDefault.svg'
import BrandIconOnly from '@/public/assets/brand/BrandIconOnly.svg'
import BrandIconOnlyDark from '@/public/assets/brand/BrandIconOnlyDark.svg'
import BrandIconOnlyLight from '@/public/assets/brand/BrandIconOnlyLight.svg'

type BrandLogoProps = {
    iconOnly?: boolean,
    theme?: "light" | "dark"
}

const BrandLogo = ({ iconOnly, theme }: BrandLogoProps) => {
    return (
        <AspectRatio ratio={1 / 1} className=''>
            {iconOnly ? (
                theme === 'light' ? (
                    <Image
                        src={BrandIconOnlyLight}
                        alt='hackmates'
                        fill
                        className='h-full w-full object-cover'
                    />
                ) : theme === 'dark' ? (
                    <Image
                        src={BrandIconOnlyDark}
                        alt='hackmates'
                        fill
                        className='h-full w-full object-cover'
                    />
                ) : (
                    <Image
                        src={BrandIconOnly}
                        alt='hackmates'
                        fill
                        className='h-full w-full object-cover'
                    />
                )
            ) : (
                <Image
                    src={BrandDefault}
                    alt='hackmates'
                    fill
                    className='h-full w-full object-cover'
                />
            )}
        </AspectRatio>
    )
}

export default BrandLogo
