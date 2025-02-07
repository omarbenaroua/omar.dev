import { useState } from "react";
import { Button , ButtonSecondary } from "./Buttons";


const ContactPopup = () => {
  return (
    <a className="fixed inset-0 bg-primary bg-opacity-80 z-10 flex items-center justify-center">
      <section className="rounded-3xl shadow-2xl bg-primary p-8 text-center sm:p-12 max-w-md mx-auto">
        <p className="text-3xl font-semibold uppercase tracking-widest text-gray animate-bounce">
        Thanks for Reaching Out!
        </p>

        <h2 className="mt-6 text-xl font-bold">I’ve received your message and will reply soon. Thanks for your interest!</h2>
        <div className=" flex justify-center p-4 gap-3 ">
        <Button title="Home" href="/"/>
        <ButtonSecondary title="Repeat" href="/contact"/>
        </div>
      </section>
    </a>
  );
};

export default ContactPopup;
