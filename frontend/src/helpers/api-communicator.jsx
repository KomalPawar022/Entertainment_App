import axios from "axios";
export const signupUser = async (email, password) => {
  const res = await axios.post(
    "https://rj9czv-8080.csb.app/api/v1/user/signup",
    { email, password },
  );
  // if (res.status !== 201) throw new Error("Unable to SignUp");
  // const data = await res.data;
  // return data;
  return res;
};
