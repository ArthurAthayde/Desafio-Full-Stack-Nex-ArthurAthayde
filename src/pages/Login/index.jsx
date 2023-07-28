import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledFormContainer } from "../Register/style";
import { StyledTitleThree } from "../../styles/typography";
import { Input } from "../../components/Input";
import { StyledRegisterBtn } from "../../styles/buttons";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  const { loginSubmit } = useContext(UserContext);

  const handleLogin = (data) => {
    loginSubmit(data);
  };

  return (
    <>
      <StyledFormContainer>
        <StyledTitleThree>Login</StyledTitleThree>
        <form
          onSubmit={handleSubmit((data) => {
            if (isValid) {
              handleLogin(data);
            }
          })}
        >
          <Input
            type="email"
            label="Email"
            placeholder="Digite seu email aqui"
            id="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            type="password"
            label="Senha"
            placeholder="Digite sua senha aqui"
            id="password"
            error={errors.password?.message}
            {...register("password")}
          />

          <StyledRegisterBtn type="submit">Acessar</StyledRegisterBtn>
          <Link className="returnBtn" to="/register">
            Criar conta
          </Link>
        </form>
      </StyledFormContainer>
    </>
  );
};
