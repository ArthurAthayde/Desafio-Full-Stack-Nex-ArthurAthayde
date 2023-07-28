import styled, { css } from "styled-components";

export const titleStyles = css`
  font-weight: 700;
  color: var(--grey-0);
  line-height: 1.4;

  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-size: 1rem;
        `;
      case "two":
        return css`
          font-size: 1rem;
          font-weight: 600;
        `;
      case "three":
        return css`
          font-size: 0.875rem;
        `;
    }
  }}
`;

export const StyledTitleOne = styled.h1`
  ${titleStyles}
`;

export const StyledTitleTwo = styled.h2`
  ${titleStyles}
`;

export const StyledTitleThree = styled.h3`
  ${titleStyles}
`;

export const StyledHeadline = styled.label`
  font-weight: 400;
  font-size: 0.75rem;
  color: var(--grey-0);
`;

export const StyledHeadlineText = styled.p`
  font-size: 0.75rem;
  color: var(--grey-0);
`;

export const StyledHeadlineSpan = styled.span`
  font-size: 0.75rem;
  color: var(--grey-1);
`;

export const StyledBoldHeadline = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
`;

export const StyledItalicHeadline = styled.p`
  font-size: 0.75rem;
  font-style: italic;
`;
