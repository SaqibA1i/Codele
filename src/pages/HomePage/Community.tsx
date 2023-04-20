import styled, { ThemeContext } from "styled-components";
import { VBox } from "../../styles/VBox";
import { Button } from "../../styles/Button";
import { Box } from "../../styles/Box";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { theme } from "../../styles/Styles";

type Props = {
  src?: string;
  Name?: string;
  Description?: string;
  buttonText?: string;
  disabled?: boolean;
  fade?: string;
  link?: string;
  MoreDesc?: JSX.Element;
};

const StyledVBox = styled(VBox)`
  gap: 1.3rem;
  justify-content: space-between;
  margin: 20px;
  align-self: flex-start;
  max-width: 300px;
  flex: 1;
  @media screen and (max-width: ${({ theme }) => `${theme.mobile}`}) {
    height: fit-content;
  }
  button {
    color: white;
    padding: 15px 30px;
    cursor: pointer;
    border: none;
    align-self: start;
    font-size: 1rem;
    ${({ theme }) => `
    background: ${theme.blue}`}
  }
  p {
    max-width: 350px;
    font-weight: 600;
  }
`;

const Community = ({
  src,
  Name,
  Description,
  buttonText,
  disabled,
  fade,
  link,
  MoreDesc,
}: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const theme = useContext(ThemeContext);
  const Img = styled(Link)`
    background: url(${src});
    ${link ? `cursor: pointer` : `cursor: arrow`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    max-width: 80vw;
    width: 350px;
    height: 350px;
    background-size: cover;
    color: white;
    font-size: 1.9rem;
    font-weight: 600;
    transition: 0.3s all;
    text-decoration: none;
    text-align: center;
    ${link &&
    fade &&
    `
    &:hover {
      transform: scale(1.03);
      font-size: 2.1rem;
    }`}
  `;
  const Img2 = styled.a`
    background: ${fade
      ? `linear-gradient(to left, rgba(0, 0, 0, 0.771) 0%,rgba(0, 0, 0, 0.771) 100%), url(${src})`
      : `url(${src})`};
    ${link ? `cursor: pointer` : `cursor: arrow`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    max-width: 80vw;
    width: 350px;
    height: 350px;
    background-size: cover;
    color: white;
    font-size: 1.9rem;
    font-family: Bellefair;
    font-weight: 600;
    transition: 0.3s all;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    ${link &&
    fade &&
    `
   &:hover {
     transform: scale(1.03);
     font-size: 2.1rem;
   }`}
  `;
  return (
    <StyledVBox className={disabled || show ? "" : "truncate"}>
      {src && !link?.includes("http") ? (
        <Img to={link ? link : "#"}>{fade}</Img>
      ) : link ? (
        <Img2 href={link ? link : "#"} target="_blank">
          {fade}
        </Img2>
      ) : (
        <></>
      )}
      {Name && <h2 style={{ color: theme.red, textAlign: "start" }}>{Name}</h2>}
      {Description && <p>{Description}</p>}
      <Box
        style={{
          maxHeight: MoreDesc && show ? "1000px" : "0px",
          opacity: MoreDesc && show ? 1 : 0,
          transition: "0.5s all",
          alignSelf: "stretch",
          gap: "1rem",
          zIndex: MoreDesc && show ? "10" : "-1",
          width: "-webkit-fill-available",
        }}
      >
        {MoreDesc}
      </Box>
      {!disabled && (
        <Button
          intent="submit"
          onClick={() => {
            if (link) {
              window.open(link, "_blank");
            }
            if (MoreDesc) {
              setShow(!show);
            }
          }}
        >
          {MoreDesc && show ? "Read Less" : "Read More"}
        </Button>
      )}
    </StyledVBox>
  );
};

export default Community;
