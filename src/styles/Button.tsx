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
          background: theme.accent,
          color: theme.black,
        };
      default:
        return {
          background: theme.blue,
          color: theme.accent,
        };
    }
  },
  {
    minWidth: "150px",
    width: "fit-content",
    cursor: "pointer",
    border: "0",
    borderRadius: "2px",
    padding: "10px",
    fontSize: "1rem",
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
