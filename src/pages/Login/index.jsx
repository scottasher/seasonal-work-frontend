import React from "react";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { FORM_OPTIONS } from "./form.config";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Login = (props) => {
  // const { form, updateForm, isValid } = useForm(FORM_OPTIONS);
  // const { login } = useAuth();

  function handleUpdateForm(e) {
    // const { value, id } = e;
    // updateForm({ value, id });
  }

  async function handleSubmit() {
    // try {
    //   login(form);
    // } catch (err) {}
  }

  // if (user.err?.name === "TokenExpiredError") {
  //   toast("Session expired", {
  //     type: "warning",
  //     toastId: "sessionExpired",
  //     progressClassName: "bg-blue-500",
  //     // onClose: logout,
  //   });
  // }

  return (
    <>
      <div className="w-full md:w-3/4">
        <p className="text-center text-4xl font-bold pb-5">Welcome</p>
        <div className="my-3">
          <Input id="email" onChange={handleUpdateForm} placeholder="Email" />
        </div>
        <div className="my-3">
          <Input
            id="password"
            onChange={handleUpdateForm}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember me"
            id="rememberMe"
            onChange={(e) => handleUpdateForm({ id: e.id, value: e.checked })}
          />
          <Link to="/forgot/password" className="hover:underline font-semibold">
            Forgot Password?
          </Link>
        </div>
        <div className="my-3">
          <Button
            type="dark"
            // disabled={!isValid}
            onClick={handleSubmit}
            className="w-full"
          >
            Submit
          </Button>
        </div>
      </div>
      <div className="text-center pt-10">
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="underline font-semibold">
            Click here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
