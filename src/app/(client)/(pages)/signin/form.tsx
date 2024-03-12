"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/common/buttons";

type Props = {};

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "invalid email" })
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
});

const formBaseStyles = {
  inputFields: "border border-black text-gray-900 placeholder-gray-200",
  errorMessages: "text-red-400 font-medium text-sm",
};

const SigninForm = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-4 items-end justify-center md:py- py-">
      <div className="flex flex-col gap-2 px-8 py- w-[320px]  md:py- h-svh items-center justify-center shadow-2xl rounded-lg sm:w-[580px]  ">
        <div className="flex flex-col gap-1  items-center">
          <h2 className="font-extrabold text-4xl ">Sign In</h2>
          <div className="text-sm text-center ">
            <p className="text-black">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="text-gray-900 underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
        <Form {...form}>
          <form className="space-y-3 w-full  px-2 mb-2 ">
            <div className="space-y-5 ">
              <div>
                <div className="text-base">Username</div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          className={`${formBaseStyles.inputFields}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div className="text-base">Password</div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className={`${formBaseStyles.inputFields}`}
                            {...field}
                          />
                        </FormControl>
                        <button
                          className="absolute right-2 top-[0.65rem] text-xl"
                          type="button"
                          onClick={handleEyeClick}
                        >
                          {showPassword ? (
                            <EyeOff
                              size={25}
                              strokeWidth={1}
                              className="text-black"
                            />
                          ) : (
                            <Eye
                              size={25}
                              strokeWidth={1}
                              className="text-black"
                            />
                          )}
                        </button>
                      </div>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex items-center justify-between w-full text-sm text-gray-600">
              <div>
                <a href="#" className="underline">
                  Forgot password
                </a>
              </div>
            </div>
            <div className="">
              <Button className="w-full bg-gray-900 text-gray-0">
                Sign In
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SigninForm;