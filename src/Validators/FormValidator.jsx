import React from "react";

const FormValidator = (e) => {
  let { name, value } = e.target;
  switch (name) {
    case "name":
      if (value && value.length === 0) return name + " Field is Mandatory";
      else if (value.length < 3 || value.length > 50)
        return name + " Length Must Be 3-50 Character";
      else return "";

    default:
      return "";
  }
};

export default FormValidator;
