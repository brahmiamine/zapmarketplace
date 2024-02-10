export function getValidImagePath(imagePath) {
  // Check if imagePath is defined and is a string
  if (typeof imagePath === "string") {
    if (imagePath.startsWith("uploads/") && imagePath.includes(".")) {
      // If it matches, prepend the environment variable
      return `${import.meta.env.VITE_APP_API_BASE_URL}/${imagePath}`;
    } else {
      // For all other cases, return the imagePath as is
      return imagePath;
    }
  } else {
    // Return an empty string if imagePath is undefined or null
    return "";
  }
}
