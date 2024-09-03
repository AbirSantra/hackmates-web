import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: React.ReactNode;
}

const AppInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, id, icon, label, ...props }, ref) => {
        return (
            <div className='space-y-2'>
                {/* lable text */}
                {label &&
                    <Label
                        className='text-zinc-500 font-brand text-[14px]'
                        htmlFor={id}
                    >
                        {label}
                    </Label>}
                {/* input with icons */}
                <span className='flex items-center pl-3 ring-1 ring-zinc-200 rounded-[6px] border-input focus-within:ring-2 focus-within:ring-cyan-500 duration-200 ease-in-out'>
                    <span className=" text-zinc-400 peer-focus-within:text-black">
                        {icon}
                    </span>
                    <Input
                        id={id}
                        type={type}
                        ref={ref}
                        {...props}
                        className='placeholder:text-zinc-400 font-body font-medium border-none focus-visible:ring-offset-0 focus-visible:ring-transparent group ring-offset-0 peer text-zinc-800'
                    />
                </span>
            </div>
        )
    }
)

AppInput.displayName = 'AppInput'
export default AppInput
