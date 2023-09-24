import React from "react";
import "./form-input.styles.scss";
function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
    <input className="form-input" {...otherProps} />

      {label && (
        <lable
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </lable>
      )}
    </div>
  );
}

export default FormInput;
