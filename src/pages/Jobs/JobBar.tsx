import styled from "styled-components";
import { HBox } from "../../styles/HBox";
import { VBox } from "../../styles/VBox";
import { H1 } from "../../styles/Text";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Box } from "../../styles/Box";

const StyledHBox = styled(HBox)`
  justify-content: space-between;
  padding: 20px 2px;
  width: 100%;
  align-items: start;
  border-top: 2px solid grey;

  h3 {
    font-weight: 600;
    font-size: 1.2rem;
    margin: 0;
  }
  p {
    font-size: 0.9rem;

    max-width: 50vw;
  }
  @media screen and (max-width: ${({ theme }) => `${theme.mobile}`}) {
    h3 {
      font-weight: 600;
      font-size: 1.5rem;
      margin: 0;
    }
  }
`;
type prop = { selected: boolean };

export const Pill = styled(HBox)<prop>`
  border-radius: 40px;
  border: 2px solid #333;
  padding: 5px 19px;
  margin: 10px 2px;
  font-weight: 500;
  font-size: 0.7rem;

  ${({ selected }) => `
    color: ${selected ? "white" : "#333"};
    background: ${!selected ? "white" : "#333"};
  `}

  @media screen and (max-width: ${({ theme }) => `${theme.tablet}`}) {
    font-size: 1rem;
  }
`;

const StyledBox = styled(HBox)`
  gap: 10px;
  justify-content: start;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
type Props = {
  Head: string;
  Description: string;
  pills: string[];
};

const JobBar = ({ Head, Description, pills }: Props) => {
  return (
    <StyledHBox>
      <VBox
        style={{ textAlignLast: "start", alignItems: "start", gap: "10px" }}
      >
        <h3>{Head}</h3>
        <p>{Description}</p>
        <HBox>
          {pills.map((pill: string) => (
            <Pill selected={false}>{pill}</Pill>
          ))}
        </HBox>
      </VBox>
      <StyledBox>
        <a
          style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}
          href={`mailto:contact@bashdevelopments.com?subject=JOB APPLICATION for posting: ${Head}`}
        >
          Apply
        </a>
        <ArrowUpRight />
      </StyledBox>
    </StyledHBox>
  );
};

export default JobBar;
