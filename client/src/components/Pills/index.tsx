import styled from "styled-components";
import { HBox } from "../../styles/HBox";
import { theme } from "../../wrappers/theme";

const Pill = ({ name, failed }: { name: string; failed: boolean }) => {
  console.log("RE");
  const StyledHBox = styled(HBox)`
    color: white;
    justify-content: space-between;
    background: ${!failed ? "#2c2d3a" : "#2c2d3a"};
    padding: 3px 10px;
    border-radius: 10px;
    border: 3px solid ${!failed ? theme.light.accent : "#272835"};
    min-height: 16px;
    p {
      margin: 0;
      animation: typing 3.5s, blink-caret 1s step-end infinite;
      overflow: hidden; /* Ensures the content is not revealed until the animation */
      border-right: 0.15em solid orange; /* The typwriter cursor */
      white-space: nowrap; /* Keeps the content on a single line */
      letter-spacing: 0.15em;
      text-align: left;
      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
      @keyframes blink-caret {
        from,
        to {
          border-color: transparent;
        }
        50% {
          border-color: ${theme.light.accent};
        }
      }
    }
    b {
      color: ${failed ? "#b81c1c" : "green"};
    }
  `;

  return (
    <StyledHBox>
      <p>{name}</p>
      {name !== "" && <b>{failed ? "✖" : "✔"}</b>}
    </StyledHBox>
  );
};

export default Pill;
