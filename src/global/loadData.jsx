import { backendURL } from "../App";

export const loadData = async (pfad) => {
  const res = await fetch(`${backendURL}/${pfad}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const result = await res.json();
  console.log(result);
  return result;
};
