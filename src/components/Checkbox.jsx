import React, { useState } from "react";
import classNames from "classnames";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.checked || false);

  const color = props.color || "blue";
  const tint = color === "yellow" ? "400" : color === "orange" ? "100" : "600";
  const inputClasses = classNames(
    "form-check-input",
    "h-4 w-4 border border-gray-300 rounded-sm bg-white focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer",
    `text-${color}-${tint}`,
    `checked:bg-${color}-${tint}`,
    `checked:border-${color}-${tint}`,
    `focus:ring-${color}-500`
  );

  const handleChange = (e) => {
    props.onChange && props.onChange(e.target);
    setChecked(e.target.checked);
  };

  return (
    <div className="flex items-center mr-4">
      <input
        checked={checked}
        id={props.id}
        type="checkbox"
        className={inputClasses}
        onChange={handleChange}
      />
      <label
        htmlFor={props.id}
        className="ml-2 text-sm font-medium text-gray-900"
      >
        {props.label || props.children}
      </label>
    </div>
  );
};

export default Checkbox;
