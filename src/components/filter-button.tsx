import { ButtonHTMLAttributes } from "react";

type FilterBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  className?: string;
};

export function FilterBtn({ text, className, ...rest }: FilterBtnProps) {
  return (
    <button
      className={`text-xs py-1 px-2 rounded-lg border ${className}`}
      {...rest}>
      {text}
    </button>
  );
}
