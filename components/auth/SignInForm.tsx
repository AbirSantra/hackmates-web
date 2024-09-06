"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSignIcon, KeyRoundIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AppInput from "../app-ui/AppInput";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  rememberUser: z.boolean(),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberUser: true,
    },
  });

  function onSubmitForm(values: z.infer<typeof SignInFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        className="w-full space-y-4"
        onSubmit={form.handleSubmit(onSubmitForm)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <AppInput
                type={"text"}
                placeholder="Enter your email address"
                icon={<AtSignIcon strokeWidth={2} className="h-4 w-4" />}
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <AppInput
                type={"password"}
                placeholder="Enter your passkey"
                icon={<KeyRoundIcon strokeWidth={2} className="h-4 w-4" />}
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-brand">
          Sign In
        </Button>
        
        {/* rememberUser checkbox contfirmations */}
        <FormField
          control={form.control}
          name="rememberUser"
          render={({ field }) => (
            <FormItem>
              <div className="flex h-full items-center space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <label className="text-xs font-semibold text-primary">
                  Remember me for 30 days
                </label>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SignInForm;
