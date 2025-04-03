const ImageValidator = (e) => {
  let { files } = e.target;
  console.log(files);
  if (files.length === 0) {
    return "Pic Field is Mendatory";
  } else if (files.length === 1) {
    let file = files[0];
    if (file.size > 1048576) {
      return "File is Too High. Please Upload a file upto 1MB";
    } else if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/jpeg" ||
      file.type === "image/webp" ||
      file.type === "image/gif"
    ) {
      return "";
    } else {
      return "Invalid Pic. Please Upload .jpg, .jpeg, .png, .webp, .gif Format";
    }
  } else {
  }
};

export default ImageValidator;
