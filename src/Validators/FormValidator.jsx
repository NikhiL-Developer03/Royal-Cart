const FormValidators = (e) => {
  const { name, value } = e.target;
  switch (name) {
    case "name":
    case "color":
      if (value && value.length === 0) return name + "Field is Mendatory";
      else if (value.length < 3 || value.length > 50)
        return name + " Length must be 3 to 30 character";
      else return "";

    case "size":
      if (value && value.length === 0) return name + "Field is Mendatory";
      else if (value.length > 10)
        return name + " Length must be upto 10 character";
      else return "";

    case "basePrice":
      if (value && value.length === 0)
        return "Stock Qunatity Field is Mendatory";
      else if (value < 1) return "Base Price must be a Positive Value";
      else return "";

    case "stockQuantity":
      if (value && value.length === 0)
        return "Stock Quantity Field is Mendatory";
      else if (value < 0) return "Stock Quantity must be a Positive Value or 0";
      else return "";

    case "discount":
      if (value && value.length === 0) return "Discount Field is Mendatory";
      else if (value < 0 || value > 99) return "Discount must be 0-99%";
      else return "";

    case "message":
      if (value && value.length === 0) return name + "Field is Mendatory";
      else if (value.length < 50)
        return name + " Length must be 50 character or more.";
      else return "";
    default:
      return "";
  }
};

export default FormValidators;
