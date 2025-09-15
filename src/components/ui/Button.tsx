import React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonProps } from "../../interface";
import ButtonSvg from "../../assets/svg/ButtonSvg";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, asChild = false, px, isWhite, withSvg, ...props },
    ref
  ) => {
    const Tag = asChild ? Slot : "button";

    const classes = `
      button relative inline-flex items-center justify-center h-11 
      transition-colors hover:text-color-1
      ${px || "px-7"} 
      ${isWhite ? "text-n-8" : "text-n-1"} 
      ${className || ""}
    `;

    return (
      <Tag className={classes} ref={ref} {...props}>
        <span className="relative z-10">{children}</span>
        {withSvg && <ButtonSvg white={isWhite} />}
      </Tag>
    );
  }
);

export default Button;
