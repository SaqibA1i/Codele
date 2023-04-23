import styled from "styled-components";
import Section from "../../components/Section";
import { HBox } from "../../styles/HBox";
import Community from "../HomePage/Community";
import { VBox } from "../../styles/VBox";
import { Button } from "../../styles/Button";
import { EnvelopeAtFill, EnvelopeFill, Mailbox } from "react-bootstrap-icons";
import { H1 } from "../../styles/Text";
import { Box } from "../../styles/Box";
import Banner from "../../components/Banner";
import { LinkExternalPage } from "../../components/Navbar/NavLinks";

const ContactPage = () => {
  return (
    <VBox style={{ alignItems: "stretch" }}>
      <Banner
        src="skyline.jpg"
        heading="Contact Us"
        subHeading="Are you looking to develop land for residential or commercial purposes? Contact our experienced team to discuss your project and learn how we can help bring your vision to life. We offer a range of services from land acquisition to site development, and we're committed to delivering exceptional results."
        anim
      />
      <HBox style={{ alignItems: "stretch" }} width="100%">
        <VBox
          flexGrow={1}
          style={{ gap: "1rem", padding: "50px", alignItems: "start" }}
        >
          <H1>For inquires Contact:</H1>
          <VBox style={{ alignItems: "start" }}>
            <h3>Head Office</h3>
            <p>221 Helen Ave. Markham, ON L3R 1J7</p>
            <p>1275 Finch Ave West, North York, ON M3J 2G5</p>
          </VBox>
          <VBox style={{ alignItems: "start" }}>
            <h3>Phone</h3>
            <p>+1 905 479 9600</p>
          </VBox>
          <VBox style={{ alignItems: "start" }}>
            <h3>WhatsApp</h3>
            <a
              style={{
                textDecoration: "underline",
                color: "#333",
                padding: "10px 0",
              }}
              href="https://wa.me/12896375120"
            >
              <p>+1 (647) 947-7087</p>
            </a>
          </VBox>
        </VBox>
        <VBox
          flexGrow={1}
          style={{ gap: "1rem", padding: "50px", background: "#e9e9e9" }}
        >
          <H1>Email us!</H1>
          <p style={{ maxWidth: "350px" }}>
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
    </VBox>
  );
};

export default ContactPage;
