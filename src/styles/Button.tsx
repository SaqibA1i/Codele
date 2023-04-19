import { CaretRightFill } from "react-bootstrap-icons";
import styled from "styled-components";

type Props = {
  intent: "submit" | "edit" | "delete";
  theme: any;
  children?: any;
};

const StyledButton = styled.button<Props>(
  ({ intent, theme }) => {
    switch (intent) {
      case "submit":
        return {
          background: `${theme.red} !important`,
          color: theme.red,
        };
      default:
        return {
          background: `white`,
          color: theme.red,
        };
    }
  },
  {
    minWidth: "150px",
    width: "fit-content",
    cursor: "pointer",
    border: "0",
    borderRadius: "10px",
    padding: "15px",
    fontSize: "1.2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "0.3s all",
  },
  `&:hover {
    transition: 0.3s all;
    background: black;
    scale: 1.05;
  }`
);

export const Button = ({
  intent,
  children,
  icon,
  onClick,
}: {
  intent: "submit" | "edit" | "delete";

  children?: string;
  icon?: any;
  onClick?: any;
}) => {
  return (
    <StyledButton intent={intent} onClick={onClick}>
      {icon}
      {children}
      {!icon && <CaretRightFill size={15} />}
    </StyledButton>
  );
};
