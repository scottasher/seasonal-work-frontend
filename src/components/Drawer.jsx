import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

const Drawer = (props) => {
  const wrapperClasses = classNames(
    props.className,
    "fixed z-50 h-screen overflow-y-auto bg-white duration-300",
    { "w-0": !props.visible },
    { "w-80": props.visible },
    {
      "transition-transform right-0 top-0 transform-none":
        props.position === "right",
    }
  );

  function closeHandler() {
    props.onClose();
  }

  const title =
    typeof props.title === "string" ? (
      <h5 className="duration-300 inline-flex items-center text-base font-semibold text-gray-800">
        {props.title}
      </h5>
    ) : (
      props.title
    );

  const headerClasses = classNames("flex items-end justify-between p-4", {
    "border-b": !props.noBorderHeader,
  });

  const header = props.header ? (
    props.header
  ) : (
    <div className={headerClasses}>
      {title}
      <button
        onClick={closeHandler}
        type="button"
        className="text-gray-600 rounded-full p-1.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm"
      >
        <XMarkIcon className="w-5 h-5" />
        <span className="sr-only">Close menu</span>
      </button>
    </div>
  );

  return (
    <div>
      <div className={wrapperClasses} tabIndex="-1" role="dialog">
        {header}
        <div className="p-4">{props.body}</div>
      </div>
      {props.visible && (
        <div className="bg-gray-900 bg-opacity-50 fixed inset-0 z-10"></div>
      )}
    </div>
  );
};

export default Drawer;
