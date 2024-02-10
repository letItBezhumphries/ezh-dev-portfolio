import styled from 'styled-components';
import ButtonGroup from '../ButtonGroup';

const FooterSection = styled.footer`
  background: linear-gradient(45deg, rgb(162, 10, 162) 0, black 100%);
  height: 200px;
  min-height: 100px;
  color: #f2f2f2;
  font-size: 16px;
`;

const FooterWrapper = styled.div`
  padding: 5rem 0 4rem;
  font-size: inherit;
  display: flex;
  flex-direction: column;
  text-align: center !important;
  height: 100%:
`;

const SocialWrapper = styled.div`
  margin: 0 0;
  padding: 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CopyrightWrapper = styled.div`
  margin-top: 25px;
  color: #f2f2f2;
  font-weight: 500;
  font-size: inherit;
`;

const Footer = () => {
  return (
    <FooterSection id="footer">
      <FooterWrapper>
        <SocialWrapper>
          <ButtonGroup />
        </SocialWrapper>
        <CopyrightWrapper>&copy; Eric Humphries 2023</CopyrightWrapper>
      </FooterWrapper>
    </FooterSection>
  );
};
export default Footer;
