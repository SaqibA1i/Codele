import Banner from "../../components/Banner";
import Section from "../../components/Section";
import { HBox } from "../../styles/HBox";
import { VBox } from "../../styles/VBox";
import JobBar, { Pill } from "./JobBar";

const Jobs = () => {
  return (
    <Section head="Apply!">
      <VBox
        style={{
          gap: "2rem",
          marginBottom: "-20px",
        }}
      >
        <Banner
          src="niagra.jpg"
          heading="Be Part of our mission"
          subHeading="We're looking for passionate people to join us on our mission. Attach your resume to the email when hit apply!"
          anim
        />
        <VBox
          maxWidth={"900px"}
          style={{
            alignItems: "start",
            width: "-webkit-fill-available",
            marginBottom: "50px",
          }}
          padding="0 40px"
        >
          <HBox marginBottom={"20px"}>
            <Pill selected>
              Attach resume to the email in order to be considered
            </Pill>
          </HBox>
          <JobBar
            Head={"Site Super"}
            Description="The Site Superintendent will be responsible for managing day-to-day construction activities, coordinating with subcontractors and vendors, ensuring quality workmanship, and ensuring projects are completed on time and within budget."
            pills={["Full Time"]}
          />
          <JobBar
            Head={"Junior Book Keeper"}
            Description="We are seeking a Junior Bookkeeper to join our accounting team. The ideal candidate will be responsible for maintaining accurate financial records of our organization, including daily transactions, accounts payable, accounts receivable, and bank reconciliations."
            pills={["Full Time"]}
          />
          <JobBar
            Head={"Land Planners"}
            Description="Prepare plans and studies, conduct inspections, prepare site approval documents, coordinate with other local governments, create and interpret maps and diagrams, meet with public officials and the public regarding development plans and land use, recommend approval or denial of proposals
            "
            pills={["Full Time"]}
          />
          <JobBar
            Head={"Junior Accountant"}
            Description="Posting journal entries, updating financial statements, maintaining accounts receivable and accounts payable, paying monthly payroll, and preparing financial reports. Keeping track of deposits, client payments, sales, and profitabilities."
            pills={["Full Time"]}
          />
          <JobBar
            Head={"Other"}
            Description="Don't see a job posting that aligns with your skills? Feel free to apply here and send us your resume."
            pills={["Full Time"]}
          />
        </VBox>
      </VBox>
    </Section>
  );
};

export default Jobs;
