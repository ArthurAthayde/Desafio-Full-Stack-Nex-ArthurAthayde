import styled from "styled-components";

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  background-color: var(--color-bg);

  width: 90%;
  max-width: 369px;
  height: 566px;

  border-radius: 4px;

  padding: 44px 24px;
  margin: 0 auto;

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
