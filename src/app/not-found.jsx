import React from "react";
import { Button } from "./_elements/Buttons";

const notFound = () => {
  return (
    <div>
      <div className="grid h-screen place-content-center bg-primary px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xlacendsto fancesto text-secondary">
            Uh-oh!
          </p>
          <p className="mt-4 text-gray-500">This page is non-existent.</p>
          <Button href="/" title="Home page"/>
        </div>
      </div>
    </div>
  );
};

export default notFound;
