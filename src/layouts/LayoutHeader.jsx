import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { transitionClasses } from "../constants/classes";
import { Link, useNavigate } from "react-router-dom";

const squareClasses =
  "flex items-center justify-center flex-none w-14 h-14 border-slate-400 cursor-pointer";

const LayoutHeader = (props) => {
  const ref = useRef();
  const navigate = useNavigate();

  function clickHandler() {
    props.setNavOpen(!props.navOpen);
  }

  useOutsideClick(ref, () => {
    if (props.navOpen) clickHandler();
  });

  const menuToggleClasses = classNames(
    "border-r",
    squareClasses,
    transitionClasses
  );

  const loginButtonClasses = classNames(
    "border-l",
    squareClasses,
    transitionClasses
  );

  return (
    <div className="flex flex-row items-center w-full">
      <div ref={ref} onClick={clickHandler} className={menuToggleClasses}>
        <Bars3Icon className="w-9 h-9" />
      </div>
      <Link to="/" className="grow flex items-center justify-center">
        <span className="text-3xl font-extrabold uppercase">Upseasonal</span>
      </Link>
      <div className={loginButtonClasses} onClick={() => navigate("/login")}>
        <UserIcon className="w-7 h-7" />
      </div>
    </div>
  );
};

export default LayoutHeader;
