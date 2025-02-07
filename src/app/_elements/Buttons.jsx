import React from "react";

export const Button = (props) => {
  return (
    <div>
      <a
        className="inline-block rounded bg-secondary px-8 py-3 text-sm font-medium text-primary transition hover:scale-110 hover:shadow-lg hover:shadow-secondary focus:outline-none focus:ring active:bg-primary"
        href={props.href}
        download={props.download}
      >
        {props.title}
      </a>
    </div>
  );
};

export const ButtonSecondary = (props) => {
  return (
    <div>
      <a
        className="inline-block rounded bg-primary border border-current px-8 py-3 text-sm font-medium text-secondary transition hover:shadow-secondary hover:scale-110 hover:shadow-lg focus:outline-none focus:ring active:text-primary"
        href={props.href}
      >
        {props.title}
      </a>
    </div>
  );
};
