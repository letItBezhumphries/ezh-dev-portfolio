import InteractiveHeading from './headings/InteractiveHeading';
import Divider from './Divider';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  width: 100%;
  height: auto;
  min-height: 700px;
  padding: 0;
  overflow: hidden;
  color: #f2f2f2;
  position: relative;
`;

const OverlayWrapper = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61));
  width: 100%;
  height: 100%;
`;

const Heading = styled.h1`
  font-size: 5rem;
  margin: 2rem 0;
  color: #fff;

  @media only screen and (max-width: 600px) {
    font-size: 3.6rem;
    margin: 1rem 0;
  }
`;

const SectionCardWrapper = styled.div`
  padding: 4rem 2rem;
  border-radius: 2%;

  @media only screen and (max-width: 600px) {
    padding: 2rem 2rem;
  }

  @media only screen and (max-width: 425px) {
    padding: 1rem 0.5rem;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

const CardHeading = styled.h4`
  text-align: left;
  padding: 5px 0;
  font-size: 2rem;
  color: #fff;
`;

const List = styled.div`
  margin: 0 0;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 1.4rem;
  text-align: left;
`;

const ListItem = styled.div`
  margin-bottom: 3rem;

  @media only screen and (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

export const CardList = ({ children }) => {
  return <List>{children}</List>;
};

export const SectionCard = ({ children, heading, flexDirection }) => {
  let wrapper;
  if (flexDirection === 'row') {
    wrapper = (
      <SectionCardWrapper>
        <CardHeading>{heading}</CardHeading>
        <Divider color="#00b7c7" size={'sm'}></Divider>
        <RowWrapper>{children}</RowWrapper>
      </SectionCardWrapper>
    );
  } else {
    wrapper = (
      <SectionCardWrapper>
        <CardHeading>{heading}</CardHeading>
        <Divider color="#00b7c7"></Divider>
        <ColumnWrapper>{children}</ColumnWrapper>
      </SectionCardWrapper>
    );
  }

  return wrapper;
};

export const CardListItem = ({ children }) => <ListItem>{children}</ListItem>;

export const Section = ({ heading, id, children, sectionClass, sectionRef, navTitle, interactive }) => {
  return (
    <SectionWrapper id={id} className={sectionClass} ref={sectionRef} data-scrollspy data-nav-title={navTitle}>
      {interactive ? <InteractiveHeading>{heading}</InteractiveHeading> : <Heading>{heading}</Heading>}
      <Divider color="#00b7c7"></Divider>
      {children}
    </SectionWrapper>
  );
};

export const SectionOverlay = ({ children }) => {
  return <OverlayWrapper>{children}</OverlayWrapper>;
};

export const SectionHeading = ({ heading }) => {
  return (
    <>
      <Heading>{heading}</Heading>
      <Divider color="#00b7c7"></Divider>
    </>
  );
};

// eslint-disable-next-line
export default {
  Section,
  SectionCard,
  CardList,
  CardListItem,
  SectionOverlay,
  SectionHeading
};
