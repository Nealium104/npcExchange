export const DBFetch = async () => {
  const response = await fetch("routes/api/DB");
  const data = await response.json();
  return data;
};
