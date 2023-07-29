import { Header } from "../../components/Header";
import {
  StyledProductItem,
  StyledProductsContainer,
  StyledProductsList,
} from "./style";
import { ProductList } from "./data";
import { StyledTitleTwo } from "../../styles/typography";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const DashboardPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Header />
      <StyledProductsContainer>
        <StyledTitleTwo>Lista de Produtos</StyledTitleTwo>
        <StyledProductsList>
          {ProductList.map((product) => (
            <StyledProductItem key={product.id} id={product.id}>
              <p>{product.name}</p>
              <p>$ {product.price}</p>
            </StyledProductItem>
          ))}
        </StyledProductsList>
      </StyledProductsContainer>
    </>
  );
};
