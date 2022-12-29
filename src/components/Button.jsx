import classNames from "classnames";
import React from "react";

const Button = (props) => {
  // TYPE: props.type - STRING - primary, secondary, success, warning, danger, light, dark, link
  // SIZE: props.size - STRING - sm, md, lg

  // OUTLINE: props.outline - BOOLEAN
  // DISABLED: props.disabled - BOOLEAN
  // LOADING: props.loading - BOOLEAN

  // COLORS
  const primary =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300";
  const primaryDisabled =
    "text-white hover:bg-blue-400 bg-blue-400 cursor-not-allowed";

  const alternative =
    "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200";
  const alternativeDisabled =
    "text-gray-500 bg-gray-100 border border-gray-200";

  const light =
    "text-gray-900 bg-white hover:bg-gray-100 focus:ring-gray-200 border border-gray-300";
  const dark = "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300";
  const success =
    "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300";
  const danger = "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300";
  const warning =
    "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300";

  const xs = "py-2 px-3 text-xs";
  const sm = "py-2 px-3 text-sm";
  const md = "px-5 py-2.5 text-base";
  const lg = "py-3 px-5 text-base";
  const xl = "px-6 py-3.5 text-base";

  const classes = classNames(
    props.className,
    "focus:outline-none focus:ring-3 font-medium",
    { [primary]: (props.type === "primary" || !props.type) && !props.disabled },
    { [alternative]: props.type === "alternative" && !props.disabled },
    { [light]: props.type === "light" && !props.disabled },
    { [dark]: props.type === "dark" && !props.disabled },
    { [success]: props.type === "success" && !props.disabled },
    { [danger]: props.type === "danger" && !props.disabled },
    { [warning]: props.type === "warning" && !props.disabled },
    { [xs]: props.size === "xs" },
    { [sm]: props.size === "sm" },
    { [md]: props.size === "md" || !props.size },
    { [lg]: props.size === "lg" },
    { [xl]: props.size === "xl" },
    {
      [primaryDisabled]:
        props.disabled && (props.type === "primary" || !props.type),
    },
    {
      [alternativeDisabled]: props.disabled && props.type === "alternative",
    },

    // { [`text-${props.size === "md" ? "base" : props.size}`]: props.size },
    `rounded${props.pill ? "-full" : ""}`
  );

  return props.type !== "link" ? (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={classes}
      type="button"
    >
      {props.title || props.children}
    </button>
  ) : (
    <button
      className={
        props.className +
        " outline-none hover:underline bg-transprent text-sm text-blue-500 focus:outline-none"
      }
    >
      {props.title || props.children}
    </button>
  );
};

export default Button;
