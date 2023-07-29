import { useLocation, useNavigate } from "react-router-dom";
import mainLogo from "../../assets/main_logo.png";

import { StyledHeader } from "./style";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("@NexFullStack_userToken");
    navigate("/login");
  };

  return (
    <StyledHeader>
      <div className="homeHeader">
        <img src={mainLogo} alt="Logotipo" />
        <button className="logoutBtn" onClick={logout}>
          Sair
        </button>
      </div>
    </StyledHeader>
  );
};
