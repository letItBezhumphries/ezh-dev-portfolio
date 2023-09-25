import styled from 'styled-components';
import { SectionHeading } from '../../components/Section';
import ContainerRow from '../../components/ContainerRow';
import Education from './Education';
import SkillGroup from './SkillGroup';
import { LuCheck } from 'react-icons/lu';
import { GiLightBulb } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { SiMysql, SiMongodb, SiRedux, SiTerraform, SiPacker, SiAnsible, SiDocker, SiAmazonaws, SiWebpack, SiRedis } from 'react-icons/si';
import { FaNodeJs, FaReact, FaHtml5, FaCss3, FaSass, FaSquareJs } from 'react-icons/fa6';
import Certifications from './Certifications';

const SkillsWrapper = styled.div`
  font-family: 'Montserrat';
  overflow-x: hidden;
`;

const Intro = styled.p`
  padding: 2rem 4rem 2rem 0.5rem;
  color: #fff;
  font-size: 1.8rem;
  font-family: inherit;
`;

const GroupHeading = styled.h2`
  text-transform: uppercase;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 1.5vw;
  margin: 10px 0;

  & span {
    font-weight: 500;

    @media only screen and (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  margin-top: 3rem;
  margin-left: 2rem;
`;

const ListItem = styled.li`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 300;
`;

const HeadingIcon = styled.span`
  margin-right: 2rem;
  display: inline-block;
  vertical-align: text-bottom;
  color: darkgrey;
`;

const Skills = ({ skillgroups, intro }) => {
  return (
    <SkillsWrapper>
      <SectionHeading heading={'Skills'} />
      <Intro>{intro}</Intro>
      <ContainerRow columns={2}>
        <SkillGroup skillgroup={skillgroups[0]} col={1}>
          <FaSquareJs />
          <FaNodeJs />
          <FaReact />
          <SiRedux />
          <SiWebpack />
          <FaHtml5 />
          <FaCss3 />
          <FaSass />
          <SiAmazonaws />
        </SkillGroup>
        <div
          col={1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <SkillGroup skillgroup={skillgroups[1]} tooltipLoc={'left'}>
            <SiMongodb />
            <SiMysql />
            <SiRedis />
          </SkillGroup>

          <SkillGroup skillgroup={skillgroups[2]} tooltipLoc={'left'}>
            <SiTerraform />
            <SiDocker />
            <SiPacker />
            <SiAnsible />
          </SkillGroup>
        </div>
      </ContainerRow>

      <ContainerRow columns={2}>
        <div style={{ color: '#fff', width: '50%', display: 'inline-block', verticalAlign: 'top', overflow: 'hidden', whiteSpace: 'nowrap' }} col={1}>
          <GroupHeading>
            <HeadingIcon>
              <BsTools style={{ height: '35px', width: '35px' }} />
            </HeadingIcon>
            <span>Tools</span>
          </GroupHeading>
          <List>
            <ListItem>
              <LuCheck /> Git + Github
            </ListItem>
            <ListItem>
              <LuCheck /> Command Line
            </ListItem>
            <ListItem>
              <LuCheck /> Chrome DevTools
            </ListItem>
            <ListItem>
              <LuCheck /> Postman
            </ListItem>
          </List>
        </div>

        <div style={{ color: '#fff', width: '50%', display: 'inline-block', verticalAlign: 'top', overflow: 'hidden', whiteSpace: 'nowrap' }} col={1}>
          <GroupHeading>
            <HeadingIcon>
              <GiLightBulb style={{ height: '35px', width: '35px' }} />
            </HeadingIcon>
            <span>Knowledge</span>
          </GroupHeading>
          <List>
            <ListItem>
              <LuCheck /> TDD
            </ListItem>
            <ListItem>
              <LuCheck /> ECMAScript 6
            </ListItem>
            <ListItem>
              <LuCheck /> Bash Scripting
            </ListItem>
            <ListItem>
              <LuCheck /> CiCD
            </ListItem>
          </List>
        </div>
      </ContainerRow>

      <ContainerRow columns={2}>
        <Education col={1} />
        <Certifications col={1} />
      </ContainerRow>
    </SkillsWrapper>
  );
};

export default Skills;
