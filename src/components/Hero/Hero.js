import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Nelia <br />A Frontend Developer
      </SectionTitle>
      <SectionText>
        My journey involves crafting dynamic web applications using technologies
        like JavaScript, React, Node.js, and PostgreSQL
      </SectionText>
      {/* <Button onClick={() => window.location = "https://www.google.dk/?gws_rd=ssl"}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
