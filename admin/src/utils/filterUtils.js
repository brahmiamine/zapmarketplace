export const filterArrayByCode = (items, role, code) => {
  // Check if items is an array
  if (!Array.isArray(items)) {
    return [];
  }

  // Check if role is not "Admin" and code is provided
  if (role && role !== "Admin" && code) {
    return items.filter((element) => element.code === code);
  }

  // Return all items if role is "Admin" or code is not provided
  return items;
};
