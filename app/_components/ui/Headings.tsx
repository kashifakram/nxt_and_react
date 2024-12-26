import Heading from "../Heading";
import Section from "../Section";

export default function Page() {
  return (
    <Section>
      <Heading>Title Heading 1</Heading>
      <Section>
        <Heading>Heading 2</Heading>
        <Heading>Heading 2</Heading>
        <Heading>Heading 2</Heading>
        <Section>
          <Heading>Sub-heading 3</Heading>
          <Heading>Sub-heading 3</Heading>
          <Heading>Sub-heading 3</Heading>
          <Section>
            <Heading>Sub-sub-heading 4</Heading>
            <Heading>Sub-sub-heading 4</Heading>
            <Heading>Sub-sub-heading 4</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
