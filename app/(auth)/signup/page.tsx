"use client";

import { Button } from '@/components/ui/button'
import { AtSign, Eye, Github, KeyRound, EyeOff } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import GithubLogo from '@/public/assets/socials/github-white.svg'
import AppInput from '@/components/common/AppInput'

const page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: 'johndoe@gmail.com',
        password: '12345678'
    });

    //form header
    const HeaderCard = () => {
        return (
            <div className='flex flex-col'>
                <h2 className='text-zinc-950 font-brand font-semibold text-[28px] tracking-normal antialiased'>
                    Start building today!
                </h2>
                <p className='font-body text-zinc-400 font-medium text-xs space-y-2'>
                    Already have an account? {' '}
                    <a
                        href={'/signin'}
                        className='text-primary font-brand'>
                        Sign in
                    </a>
                </p>
            </div>
        )
    }

    //github auth
    const GithubAuth = () => {
        return (
            <Button
                type='button'
                className='font-brand font-medium tracking-normal bg-zinc-900 hover:bg-black rounded-[6px]'>
                <Image
                    src={GithubLogo}
                    alt='github logo'
                    width={24}
                    height={24}
                    draggable='false'
                    className='mr-2 h-[18px] w-[18px] '
                />
                Continue with GitHub
            </Button>
        )
    }

    //signup form auth
    const SignUpForm = () => {
        return (
            <form className='space-y-4'>
                {/* email input */}
                <AppInput
                    type='email'
                    placeholder='Enter your email address'
                    id='email'
                    value={formData.email}
                    onChange={(e) => setFormData({
                        ...formData,
                        email: e.target.value
                    })}
                    icon={
                        <AtSign
                            strokeWidth={2.3}
                            className='w-4 h-4'
                        />
                    }
                />

                <div className='space-y-2'>
                    {/* password input */}
                    <AppInput
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Create a passkey'
                        id='passkey'
                        value={formData.password}
                        onChange={(e) => setFormData({
                            ...formData,
                            password: e.target.value
                        })}
                        icon={
                            <KeyRound
                                strokeWidth={2.3}
                                className='w-4 h-4'
                            />
                        }
                    />

                    <div className=' flex justify-end w-full'>
                        <button
                            type='button'
                            onClick={() => {
                                setShowPassword((prev) => !prev)
                            }}
                            className='flex flex-row items-center text-sm font-brand font-semibold text-cyan-500'
                        >
                            {showPassword ?
                                <Eye
                                    strokeWidth={2.3}
                                    className='mr-1 w-4 h-4' />
                                :
                                <EyeOff
                                    strokeWidth={2.3}
                                    className='mr-1 w-4 h-4'
                                />
                            }
                            Hide
                        </button>
                    </div>
                </div>
                <Button
                    type='submit'
                    className='bg-primary font-brand font-medium w-full'
                >
                    Sign Up
                </Button>
            </form>
        )
    }

    //policies footer card
    const FooterCard = () => {
        return (
            <span className='font-body text-zinc-400 text-xs'>
                By creating an account you agree with our {' '}
                <a
                    className='text-primary font-semibold'
                    href="">
                    Terms of Use
                </a>

                {' '} and our  {' '}
                <a
                    className='text-primary font-semibold'
                    href="">
                    Privacy Policy
                </a>
            </span>
        )
    }

    return (
        <div className='flex flex-col gap-6 w-full max-w-[340px] my-8 overflow-y-scroll lg:overflow-auto p-2'>
            <HeaderCard />
            <div className='flex flex-col gap-4 '>
                <GithubAuth />
                <div className='text-[10px] text-zinc-500 font-semibold font-brand flex flex-row justify-evenly items-center gap-6'>
                    <div className='w-full border-t border-dashed border-zinc-200'></div>
                    OR
                    <div className='w-full border-t border-dashed border-zinc-200'></div>
                </div>
                <SignUpForm />
                <FooterCard />
            </div>
        </div>
    )
}

export default page
