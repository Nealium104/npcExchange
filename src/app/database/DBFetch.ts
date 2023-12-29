export const DBFetch = async () => {
  const response = await fetch("/api/DB");
  const data = await response.json();
  return data;
};
