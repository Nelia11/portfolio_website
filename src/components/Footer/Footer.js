import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <CompanyContainer>
        <Slogan>Write me an email </Slogan>
        <LinkItem href="mailto:levit.nelia@icloud.com">
          levit.nelia@icloud.com
        </LinkItem>
      </CompanyContainer>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Or reach me via</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Nelia11" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/nelia-levit-03144a234/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/profile.php?id=100008215662863" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;