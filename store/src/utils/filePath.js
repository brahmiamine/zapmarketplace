export function getValidImagePath(imagePath) {
  // Check if imagePath is an array with one string element
  if (Array.isArray(imagePath) && imagePath.length > 0 && typeof imagePath[0] === "string") {
    // Process the single element in the array
    const item = imagePath[0];
    if (item.startsWith("uploads/") && item.includes(".")) {
      return `${process.env.NEXT_PUBLIC_API_BASE_URL}/${item}`;
    } else {
      return item;
    }
  } else if (typeof imagePath === "string") {
    // Existing logic for a single string
    if (imagePath.startsWith("uploads/") && imagePath.includes(".")) {
      return `${process.env.NEXT_PUBLIC_API_BASE_URL}/${imagePath}`;
    } else {
      return imagePath;
    }
  } else {
    console.log("retour image vide");
    // Return an empty string if imagePath is undefined, null, or not a string/array
    return "";
  }
}
