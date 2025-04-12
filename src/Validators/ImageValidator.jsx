const ImageValidator = (e) => {
  const { files } = e.target;
  console.log(files);
  if (files.length === 0) {
    return "Image field is mendatory";
  } else if (files.length === 1) {
    const file = files[0];
    if (file.size > 1048576) {
      return "File is Too High. Please Upload a file upto 1MB";
    } else if (
      file.type === "image/jpg" ||
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/webp" ||
      file.type === "image/gif"
    ) {
      return null;
    } else {
      return "Invalid Pic. Please Upload .jpg .jpeg .png .webp .gif format";
    }
  } else {
    var errorMessage = [];
    Array.from(e.target.files).forEach((file, index) => {
      if (file.size > 1048576) {
        errorMessage.push(
          `Pic size ${index + 1} is Too High. Please Upload a file upto 1MB`
        );
      } else if (
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/webp" ||
        file.type === "image/gif"
      );
      else {
        errorMessage.push(
          `Invalid Pic ${
            index + 1
          }. Please Upload .jpg .jpeg .png .webp .gif format`
        );
      }
    });
    console.log(errorMessage)
    return errorMessage.length===0 ? "" : errorMessage.toString();
  }
};

export default ImageValidator;
