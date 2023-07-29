import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledTitleThree } from "../../styles/typography";
import {
  StyledFormRegisterContainer,
  StyledRegisterPageContainer,
  StyledSlogan,
} from "./style";
import { useContext } from "react";
import { StyledRegisterBtn } from "../../styles/buttons";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const { handleRegister } = useContext(UserContext);

  return (
    <StyledRegisterPageContainer>
      <StyledSlogan>
        O marketplace que você precisa, a <span>um</span> passo.
      </StyledSlogan>
      <StyledFormRegisterContainer>
        <StyledTitleThree>Cadastre-se</StyledTitleThree>
        <form onSubmit={handleSubmit(handleRegister)}>
          <Input
            type="text"
            label="Nome"
            placeholder="Digite seu nome aqui"
            id="name"
            error={errors.name?.message}
            {...register("name")}
          />
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
          <StyledRegisterBtn type="submit">Cadastrar</StyledRegisterBtn>
          <Link className="returnBtn" to="/login">
            Voltar para o login
          </Link>
        </form>
      </StyledFormRegisterContainer>
    </StyledRegisterPageContainer>
  );
};
