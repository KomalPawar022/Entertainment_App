import axios from "axios";
export const signupUser = async (email, password) => {
  const res = await axios.post("/user/signup", { email, password });
  if (res.status != 201) throw new Error("Unable to SignUp");
  const data = await res.data;
  return data;
};
