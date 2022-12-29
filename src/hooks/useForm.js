import { useEffect, useState } from "react";
import { isObject } from "../utils";

const useForm = (options) => {
  const [form, setForm] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [hasBeenInit, setHasBeenInit] = useState({});

  useEffect(() => {
    if (isFormValid()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  function updateForm(obj) {
    if (!form[obj.id]) {
      setHasBeenInit({ ...hasBeenInit, [obj.id]: true });
    }
    return setForm({ ...form, [obj.id]: obj.value });
  }

  function setFormInit(obj, options) {
    if (options && options.setErrors) {
      let init = {};
      Object.keys(obj).forEach((key) => (init[key] = true));
      if (!options?.valid) {
        setIsValid(false);
        setHasBeenInit(init);
      } else {
        setIsValid(true);
        setHasBeenInit(init);
      }
    }

    return setForm({ ...form, ...obj });
  }

  function clearForm(id) {
    if (id) {
      delete form[id];
      setForm({ ...form });
      return;
    }
    return setForm({});
  }

  function valueIsEmpty(value) {
    if (!value) return true;

    if (value instanceof Object && Object.keys(value).length === 0) {
      return true;
    }

    if (Array.isArray(value) && value.length < 1) {
      return true;
    }

    if (typeof value === "string" && value === "") {
      return true;
    }

    return false;
  }

  function isFormValid(e) {
    const validations = options?.validations;

    if (validations) {
      let valid = true;
      const newErrors = {};

      Object.keys(validations).forEach((key) => {
        let renderError = hasBeenInit[key];
        const value = form[key];
        const validation = validations[key];

        if (!valueIsEmpty(renderError)) {
          valid = true;
          return;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (
          custom?.isValid &&
          !custom.isValid(value, { validations: validations[key], form })
        ) {
          valid = false;
          let message;

          if (typeof custom.message === "string") {
            message = custom.message;
          } else {
            message = custom.message(value, { validations, form });
          }

          newErrors[key] = message;
        }

        if (validation?.required && valueIsEmpty(value)) {
          valid = false;
          newErrors[key] = "This field is required";
        }

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }
      });

      if (!valid) {
        setErrors(newErrors);
        return false;
      }
    }

    setErrors({});
    return true;
  }

  return { form, updateForm, setFormInit, isValid, errors, clearForm };
};

export default useForm;

export function renderValidations(arr) {
  const res = {};
  arr.forEach((item) => {
    if (isObject(item)) {
      const id = item.id;
      return (
        id &&
        (item.required || item.custom || item.pattern || item.validations) &&
        (res[id] = {
          ...item,
        })
      );
    }
  });

  return res;
}
