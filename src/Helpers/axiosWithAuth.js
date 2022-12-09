import axios from "axios";
const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("TOKEN"));
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "http://localhost:3000/api",
  });
};
export default axiosWithAuth;
