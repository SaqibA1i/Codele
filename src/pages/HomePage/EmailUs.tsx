import { EnvelopeFill } from "react-bootstrap-icons";
import Section from "../../components/Section";
import { Button } from "../../styles/Button";
import { HBox } from "../../styles/HBox";
import { VBox } from "../../styles/VBox";

const EmailUs = () => {
  return (
    <Section head="Speak to our team" secondary>
      <HBox
        flexWrap="wrap"
        style={{ gap: "2rem", padding: "40px", color: "white" }}
      >
        <VBox style={{ gap: "2rem" }}>
          <p style={{ color: "white", fontWeight: 100 }}>
            Our goal at Bash Developments is to ensure that every customer is
            looked after in the best way.
          </p>
          <Button
            intent="edit"
            icon={<EnvelopeFill />}
            onClick={() =>
              (window.location.href = "mailto:contact@bashdevelopments.com")
            }
          >
            Email
          </Button>
        </VBox>
      </HBox>
    </Section>
  );
};
export default EmailUs;
