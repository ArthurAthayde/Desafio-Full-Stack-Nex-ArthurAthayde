import styled from "styled-components";

export const StyledInput = styled.input`
  height: 100%;
  max-height: 44px;
  width: 100%;

  margin: 10px 0;

  border: 1px solid var(--grey-1);
  border-radius: 4px;

  font-size: 1rem;

  color: var(--grey-3);
  background-color: var(--grey-2);

  padding: 0px 16px;

  ::placeholder {
    color: var(--grey-3);
  }
`;
