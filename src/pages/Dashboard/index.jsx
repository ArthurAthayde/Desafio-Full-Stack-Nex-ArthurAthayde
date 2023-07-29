import { Header } from "../../components/Header";
import {
  StyledProductItem,
  StyledProductsContainer,
  StyledProductsList,
} from "./style";
import { ProductList } from "./data";

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <StyledProductsContainer>
        <StyledProductsList>
          {ProductList.map((product) => (
            <StyledProductItem key={product.id} id={product.id}>
              <p>{product.name}</p>
              <p>{product.description}</p>
            </StyledProductItem>
          ))}
        </StyledProductsList>
      </StyledProductsContainer>
    </>
  );
};
