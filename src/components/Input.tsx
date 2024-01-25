"use client";
import { ChangeEvent, useState } from "react";

const Input = ({ name, type = "text", placeholder, children }: Props) => {
  const [isEmpty, setIsEmpty] = useState(true);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setIsEmpty(target.value === "");
  };
  return (
    <label htmlFor={name} className={isEmpty ? undefined : "unempty"}>
      <span>{placeholder}</span>
      <input id={name} name={name} type={type} onChange={onChange} />
      {children}
    </label>
  );
};

export default Input;

interface Props {
  name: string;
  type?: "text" | "password";
  placeholder: string;
  children?: React.ReactNode
}