import { forwardRef } from "react";
import { StyledInput } from "../../styles/input";
import { StyledHeadline } from "../../styles/typography";

export const Input = forwardRef(
  ({ id, label, error, children, placeholder, ...rest }, ref) => {
    return (
      <div>
        {label ? <StyledHeadline htmlFor={id}>{label}</StyledHeadline> : null}
        <StyledInput id={id} ref={ref} placeholder={placeholder} {...rest} />
        {error ? <p>{error}</p> : null}
        {children}
      </div>
    );
  }
);
