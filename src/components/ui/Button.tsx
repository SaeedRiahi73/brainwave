import React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonProps } from "../../interface";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import ButtonSvg from "../../assets/svg/ButtonSvg";

const DISPLAY_RE =
  /\b(?:hidden|block|inline-block|inline|flex|inline-flex|table|grid|contents)\b/;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      asChild = false,
      isWhite = false,
      withSvg,
      ...props
    },
    ref
  ) => {
    const Tag = asChild ? Slot : "button";
    const userHasDisplay = DISPLAY_RE.test(className!);
    const display = userHasDisplay ? "" : "inline-flex";

    const classes = `
    ${display}
  button relative  items-center justify-center h-11 transition-colors hover:text-color-1
  ${isWhite ? "text-n-8" : "text-n-1"}
  ${className || ""}
`;

    return (
      <>
        <Tag className={classes} ref={ref} {...props}>
          <span className="relative z-10">{children}</span>
          {withSvg && <ButtonSvg white={isWhite} />}
        </Tag>
        <ButtonGradient />
      </>
    );
  }
);

export default Button;
