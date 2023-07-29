import styled from "styled-components";

export const StyledHeader = styled.header`
  .homeHeader {
    height: 100px;
    width: 90%;
    max-width: 720px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
  }

  img {
    height: 100%;
  }

  .backPageBtn,
  .logoutBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    height: 32px;
    width: 79.5px;

    border-radius: 4px;
    padding: 0px 16px 0px 16px;

    color: var(--grey-0);
    font-size: 10px;

    background-color: var(--grey-3);
  }
`;
