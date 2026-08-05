export const menuKeys = {
  all: ["menu"] as const,
  items: () => [...menuKeys.all, "items"] as const,
  categories: () => [...menuKeys.all, "categories"] as const,
};
