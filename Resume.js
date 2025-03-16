import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const school = <SchoolIcon />
    return (
      <ResumeStyled>
        <InnerLayout>
          <div className="small-title u-small-title-margin">
            <SmallTitle icon={school} title={"Educational Qualifications"} />
          </div>
          <div className="resume-content ">
            <ResumeItem
              year={"From June 2023"}
              CourseDetails={"Software Engineer"}
              College={"Uptycs"}
              link={"https://www.uptycs.com/"}
            />
            <ResumeItem
              year={"Nov 2022 - June 2023"}
              CourseDetails={"Software Engineer Intern"}
              College={"Uptycs"}
              link={"https://www.uptycs.com/"}
            />
            <ResumeItem
              year={"March 2022 - July 2022"}
              CourseDetails={"Software Engineer Intern"}
              College={"Streato"}
            />
            <ResumeItem
              year={"2019 - 2023"}
              CourseDetails={" BE Information Technology / Pursuing "}
              Grades={"8.7"}
              College={"D Y Patil College of Engineering Akurdi, Pune "}
              University={"Savitribai Phule Pune University"}
            />
          </div>
        </InnerLayout>
      </ResumeStyled>
    );
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid #cbced8;
    }
`;
export default Resume
