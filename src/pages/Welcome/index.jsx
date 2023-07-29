import { useState } from "react";
import { StyledTitleOne } from "../../styles/typography";
import { useNavigate } from "react-router-dom";
import { StyledWelcomePageContainer } from "./style";

export const WelcomePage = () => {
  const [welcome, setWelcome] = useState(true);
  const navigate = useNavigate();

  if (welcome) {
    setTimeout(() => {
      navigate("/login");
    }, 4000);
  }

  return (
    <>
      <StyledWelcomePageContainer>
        <StyledTitleOne>Seja bem vindo!</StyledTitleOne>
      </StyledWelcomePageContainer>
    </>
  );
};
