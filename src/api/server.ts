import axios from "axios";

export const getActivity = () => {
  return axios.get("https://www.boredapi.com/api/activity");
};
