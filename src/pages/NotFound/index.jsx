import { useState } from "react";
import { StyledTitleOne } from "../../styles/typography";
import { useNavigate } from "react-router-dom";
import { StyledNotFoundPageContainer } from "./style";

export const NotFoundPage = () => {
  const [notFound, setNotFound] = useState(true);
  const navigate = useNavigate();

  if (notFound) {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }

  return (
    <>
      <StyledNotFoundPageContainer>
        <StyledTitleOne>Página não encontrada</StyledTitleOne>
      </StyledNotFoundPageContainer>
    </>
  );
};
