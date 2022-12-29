import { XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import React, { useState } from "react";
import { useEffect } from "react";

const Input = (props) => {
  const [value, setValue] = useState(props.value || "");

  useEffect(() => {
    props.value && setValue(props.value);
  }, [props.value]);

  const sizeLg = props.size === "lg";
  const sizeMd = props.size === "md" || !props.size;
  const sizeSm = props.size === "sm";

  const labelClasses = classNames("block mb-2", "text-sm font-medium", {
    "text-gray-900": !props.error,
    "text-red-700": props.error,
  });

  const classes = classNames(
    props.className,
    "block w-full focus:outline-none focus-visible:ring-1 focus:ring-1 focus-visible:ring-blue-500",
    "border rounded",
    { "p-4 text-md": sizeLg },
    { "p-2.5 text-sm": sizeMd },
    { "p-2 text-xs": sizeSm },
    {
      "border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900":
        !props.error,
    },
    {
      "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:outline-2 focus:ring-red-500 focus:border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500":
        props.error,
    }
  );

  function handleChange(e) {
    props.onChange && props.onChange(e.target);
    setValue(e.target.value);
  }

  function clearValue() {
    props.onChange && props.onChange("");
    setValue("");
  }

  return (
    <div className="w-full block">
      {props.label && (
        <label htmlFor={props.id} className={labelClasses}>
          {props.label}
        </label>
      )}
      <div className="relative w-full">
        <input
          {...props}
          onChange={handleChange}
          type={props.type || "text"}
          id={props.id}
          value={value}
          className={classes}
          placeholder={props.placeholder}
        />
        {props.clearable && (
          <button
            type="button"
            className="flex absolute inset-y-0 right-0 items-center pr-3"
            onClick={clearValue}
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        )}
      </div>
      {props.info && (
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">
          {props.info}
        </p>
      )}

      {props.error && (
        <p className="mt-2 text-sm text-red-600">{props.error}</p>
      )}
    </div>
  );
};

export default Input;
