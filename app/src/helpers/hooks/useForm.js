import { useState, useCallback } from "react";

export default (initialFormValue) => {
  const [formValues, setFormValue] = useState(initialFormValue);
  const handleChange = useCallback((event) => {
    const { name, value, type } = event.target;
    setFormValue((state) => {
      const valueToInsert = type === "checkbox" ? !state[name] : value;

      return {
        ...state,
        [name]: valueToInsert,
      };
    });
  }, []);
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    [formValues]
  );
  const handleReset = useCallback(() => {
    setFormValue(initialFormValue);
  }, []);
  return [formValues, handleChange, handleSubmit, handleReset];
};
