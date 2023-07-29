import styled from "styled-components";

export const StyledRegisterPageContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  padding: 8% 12%;
`;

export const StyledFormRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  background-color: var(--color-bg);

  width: 90%;
  max-width: 369px;
  height: 566px;

  border-radius: 4px;

  padding: 28px 24px;

  h3 {
    align-self: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 35px;

    p {
      color: #ff4d4d;
    }
  }

  .returnBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-height: 48px;
    width: 100%;

    border: solid 1px var(--grey-0);
    border-radius: 4px;

    padding: 0px 22px;

    font-size: 1rem;
    font-weight: 500;
    color: var(--grey-0);

    background-color: transparent;
  }
`;

export const StyledSlogan = styled.p`
  display: none;

  max-height: 177px;
  max-width: 440px;

  text-align: center;
  align-self: center;

  font-size: 2.5rem;
  color: var(--color-emphasis-1);

  span {
    color: var(--color-emphasis-2);
  }
  @media (min-width: 769px) {
    display: block;
  }
`;
