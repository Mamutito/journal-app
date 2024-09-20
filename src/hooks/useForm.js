import { useEffect, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  useEffect(() => {
    const createValidators = () => {
      const formCheckedValues = {};

      for (const formField of Object.keys(formValidations)) {
        const [fn, errorMessage] = formValidations[formField];
        formCheckedValues[`${formField}Valid`] = fn(formState[formField])
          ? null
          : errorMessage;
      }

      setFormValidation(formCheckedValues);
    };

    createValidators();
  }, [formState]); // Only re-run when formState or formValidations changes

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid: Object.values(formValidation).every((value) => value === null),
  };
};
