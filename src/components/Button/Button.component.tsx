import { styled } from "../../theme/Theme";
import React from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  as?: keyof JSX.IntrinsicElements;
  label: string;
  iconLeft?: React.ComponentType<any>;
  iconRight?: React.ComponentType<any>;
  colorStyle?: "filled" | "outlined" | "tonal";
  color?: string;
  size?: "small" | "default" | "large";
};

const ButtonContainer = styled("button", {
  display: "flex",
  flexDirection: "row",
  transitionProperty:
    "background-color, transform, border-color, outline-width",
  transitionDuration: "150ms",
  borderSize: 2,
  borderStyle: "solid",
  padding: "8px 16px",
  fontSize: 14,
  lineHeight: "20px",
  borderRadius: 8,
  gap: 8,
  userSelect: "none",
  outline: "2px none $$bg",
  outlineOffset: 2,

  "&:hover": {
    boxShadow: "$base",
    transform: "translateY(-1px)",
    cursor: "pointer",
  },

  "&:active": {
    transform: "translateY(1px)",
    boxShadow: "none",
  },

  "&:focus-visible": {
    outlineStyle: "solid",
  },

  "&:disabled": {
    backgroundColor: "$disabled_bg",
    borderColor: "$disabled_bg",
    color: "$disabled_text",

    "&:hover": {
      outlineStyle: "none",
      cursor: "not-allowed",
      transform: "none",
      boxShadow: "none",
    },
  },

  variants: {
    iconLeft: {
      true: {
        paddingLeft: 12,
      },
    },
    iconRight: {
      true: {
        paddingRight: 12,
      },
    },
    colorStyle: {
      filled: {
        backgroundColor: "$$bg",
        borderColor: "$$bg",
        color: "$$textOnBg",
      },
      outlined: {
        backgroundColor: "transparent",
        borderColor: "$$border",
        color: "$$text",
      },
      tonal: {
        backgroundColor: "$$tonalBg",
        borderColor: "$$tonalBg",
        color: "$$tonalText",
      },
    },
    size: {
      small: {
        padding: "4px 8px",
        fontSize: 12,
        lineHeight: "16px",
        borderRadius: 4,
        gap: 4,
      },
      default: {},
      large: {
        padding: "12px 24px",
        fontSize: 16,
        lineHeight: "24px",
        borderRadius: 12,
        gap: 12,
      },
    },
  },

  compoundVariants: [
    {
      size: "small",
      iconLeft: true,
      css: {
        paddingLeft: 8,
      },
    },
    {
      size: "small",
      iconRight: true,
      css: {
        paddingRight: 8,
      },
    },
    {
      size: "large",
      iconLeft: true,
      css: {
        paddingLeft: 16,
      },
    },
    {
      size: "large",
      iconRight: true,
      css: {
        paddingLeft: 16,
      },
    },
  ],
});

function Button({
  as,
  label,
  iconLeft,
  iconRight,
  colorStyle = "filled",
  color = "gray",
  size = "default",
  ...props
}: ButtonProps) {
  const iconStyles = {
    height: 20,
    width: 20,
    variants: {
      size: {
        small: { width: 16, height: 16 },
        large: { width: 24, height: 24 },
      },
    },
  };
  const LeftIcon = iconLeft && styled(iconLeft, iconStyles);
  const RightIcon = iconRight && styled(iconRight, iconStyles);

  return (
    <ButtonContainer
      as={as}
      css={{
        $$bg: `$colors$${color}_bg`,
        $$textOnBg: `$colors$${color}_bg_text`,
        $$border: `$colors$${color}_border`,
        $$text: `$colors$${color}_text`,
        $$tonalBg: `$colors$${color}_bg_tonal`,
        $$tonalText: `$colors$${color}_bg_tonal_text`,
      }}
      iconLeft={iconLeft ? true : false}
      iconRight={iconRight ? true : false}
      colorStyle={colorStyle}
      size={size}
      {...props}
    >
      {LeftIcon && <LeftIcon size={size} />}
      <span>{label}</span>
      {RightIcon && <RightIcon size={size} />}
    </ButtonContainer>
  );
}

export default Button;
