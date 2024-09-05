"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import AppInput from "../app-ui/AppInput";
import { AtSignIcon, KeyRoundIcon } from "lucide-react";
import { Button } from "../ui/button";

const SignUpFormSchma = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof SignUpFormSchma>>({
    resolver: zodResolver(SignUpFormSchma),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignUpFormSchma>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <AppInput
                type={"text"}
                placeholder="Enter your email address"
                icon={<AtSignIcon strokeWidth={2.3} className="h-4 w-4" />}
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
                placeholder="Create a passkey"
                icon={<KeyRoundIcon strokeWidth={2.3} className="h-4 w-4" />}
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default SignUpForm;
