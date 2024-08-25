"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/actions/user.actions";
import CustomInput from "./CustomInput";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-2 ">
          <Image src="/icons/logo.svg" width={34} height={34} alt="Ocee Bank" />
          <h1 className="text-26 font-bold font-ibm-plex-serif text-black-1">
            Ocee Bank
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className=" text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16">
              {user ? "Link your account" : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* {PlaidLink} */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      name="firstName"
                      placeholder="First Name"
                      label="First Name"
                      control={form.control}
                    />

                    <CustomInput
                      name="lastName"
                      placeholder="Enter your last name"
                      label="Last Name"
                      control={form.control}
                    />
                  </div>

                  <CustomInput
                    name="address1"
                    placeholder="Enter your specific address"
                    label="Address"
                    control={form.control}
                  />
                  <CustomInput
                    name="city"
                    placeholder="Enter your city"
                    label="City"
                    control={form.control}
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      name="state"
                      placeholder="ex: NY"
                      label="State"
                      control={form.control}
                    />

                    <CustomInput
                      name="postalCode"
                      placeholder="ex: 11101"
                      label="Postal Code"
                      control={form.control}
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      name="dateofbirth"
                      placeholder="yyyy-mm-dd"
                      label="Date of Birth"
                      control={form.control}
                    />
                    <CustomInput
                      name="ssn"
                      placeholder="ex: 1234"
                      label="SSN"
                      control={form.control}
                    />
                  </div>
                </>
              )}
              <CustomInput
                name="email"
                placeholder="Enter your email"
                label="Email"
                control={form.control}
              />
              <CustomInput
                name="password"
                placeholder="Enter your password"
                label="Password"
                control={form.control}
              />
              <div className="flex flex-col gap-4">
                <Button
                  // onClick={() => setIsLoading(true)}
                  type="submit"
                  className=" form-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className=" text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className=" form-link"
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
