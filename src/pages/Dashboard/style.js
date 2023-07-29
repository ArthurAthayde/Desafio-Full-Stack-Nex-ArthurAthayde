import { styled } from "styled-components";

export const StyledProductsContainer = styled.div`
  width: 90%;
  max-width: 600px;

  margin: 50px auto;

  background-color: var(--color-bg);

  h2 {
    align-self: center;
    text-align: center;

    padding-top: 20px;
  }
`;

export const StyledProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 90%;
  max-width: 500px;
  background-color: transparent;

  margin: 0 auto;
  padding: 30px 0px;

  text-align: center;
`;

export const StyledProductItem = styled.li`
  height: 40px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  background-color: var(--grey-2);

  border-radius: 4px;
  padding: 12px;
`;
