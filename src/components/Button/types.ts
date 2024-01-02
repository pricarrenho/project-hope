import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonStyleType = "transparent" | "justIcon";

export type ButtonProps = {
  children?: string | number;
  styleType: ButtonStyleType;

  icon?: "microphone" | "bell" | "mail";
  as?: React.ElementType;
} & ButtonType;
