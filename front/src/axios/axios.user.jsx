import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const createUser = async (name, email, password, phone) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/register`, {
      name,
      email,
      phone,
      password,
    });
    return data;
  } catch (error) {
    return alert(error.response.data.errors[0].msg);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log({ loginUserError: error });
    return alert("usuario y/o contraseña incorrecta");
  }
};
