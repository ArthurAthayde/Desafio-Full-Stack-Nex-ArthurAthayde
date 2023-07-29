import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      await api.post("/register", data);
      toast.success("Cadastro realizado com sucesso!");
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const loginSubmit = async (data) => {
    try {
      const response = await api.post("/login", data);
      const { user, token } = response.data;
      setUser(user);
      toast.success("Login efetuado com sucesso");
      localStorage.setItem("@NexFullStack_userToken", token);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Falha no login, confira seus dados e tente novamente");
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, handleRegister, loginSubmit }}
    >
      {children}
    </UserContext.Provider>
  );
};
