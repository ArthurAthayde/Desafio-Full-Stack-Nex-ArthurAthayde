import { styled } from "styled-components";

export const StyledProductsContainer = styled.div`
  height: 750px;
  width: 600px;

  margin: 50px auto;

  background-color: var(--color-bg);
`;

export const StyledProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 90%;
  max-width: 500px;
  background-color: transparent;

  margin: 0 auto;
  padding: 22px 15px 22px 15px;

  text-align: center;
`;

export const StyledProductItem = styled.li`
  height: 50px;
  width: 95%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  background-color: var(--grey-4);

  border-radius: 4px;
  padding: 12px;
`;
