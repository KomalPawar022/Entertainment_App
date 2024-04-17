import axios from "axios";
export const signupUser = async (email, password) => {
  const res = await axios.post(
    "https://rj9czv-8080.csb.app/api/v1/user/signup",
    { email, password },
  );
  return res;
};

export const userLogin = async (email, password) => {
  const res = await axios.post(
    "https://rj9czv-8080.csb.app/api/v1/user/login",
    { email, password },
  );
  return res;
};
