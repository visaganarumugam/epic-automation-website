"use client";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";

export default function HelpCenter() {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left: Contact Form */}
      <div className="flex-1 flex flex-col justify-center items-center py-8">
        <div className="mx-auto w-full max-w-2xl flex flex-col items-start justify-start rounded-none   p-4 md:rounded-2xl md:py-10 dark:bg-black">
          <h1 className="text-6xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">Contact us</h1>
          <p className="mt-3 max-w-xl font-semibold text-start text-2xl text-neutral-500 dark:text-neutral-300 mb-12">
            Our friendly team would love to hear from you!
          </p>
          <form className="w-full" onSubmit={e => e.preventDefault()}>
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-5">
              <LabelInputContainer>
                <Label className="text-md font-semibold " htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="First name" type="text" className="h-15 placeholder:text-lg" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label className="text-md font-semibold " htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Last name" type="text" className="h-15 placeholder:text-lg" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label className="text-md font-semibold " htmlFor="email">Email</Label>
              <Input id="email" placeholder="youemail@gmail.com" type="email" className="h-15 placeholder:text-lg" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label className="text-md font-semibold " htmlFor="phone">Phone number</Label>
              <Input id="phone" placeholder="+91 123 456 7890" type="tel" className="h-15 placeholder:text-lg w-full" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-12">
              <Label className="text-md font-semibold " htmlFor="message">Message</Label>
              <textarea id="message" placeholder="Type your message"  className="w-full placeholder:text-gray-400 border-2 border-gray-200 rounded-md px-2 py-2 text-start h-40 bg-gray-100/30 focus-visible:border-2 focus-visible:border-gray-200 resize-none" />
            </LabelInputContainer>
            <div className="flex gap-3">
            <button
              className="group/btn relative cursor-pointer block  h-15 placeholder:text-lg w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
            >
              Send message
              <BottomGradient />
            </button>
            <button
              className="group/btn relative block h-15 cursor-pointer placeholder:text-lg w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              
            >
               Back to Home
              <BottomGradient />
            </button>
            </div>
          </form>
        </div>
      </div>
      {/* Right: Google Map */}
      <div className="flex-1 h-[98vh] mx-2 rounded-4xl my-2">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d979.0096695696262!2d76.967405!3d11.035725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590042c0ea6d%3A0x96eb8f8694606587!2sEPIC%20AUTOMATIONS!5e0!3m2!1sen!2sin!4v1752049960726!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen={true}
          className="rounded-4xl px-1 py-1 bg-black/70"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
}; 