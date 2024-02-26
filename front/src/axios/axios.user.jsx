import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const createUser = async (name, email, phone, password) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/register`, {
      name,
      email,
      phone,
      password,
    });
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
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
