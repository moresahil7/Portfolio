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
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                
                
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019 - 2023'} 
                        CourseDetails={' BE Information Technology / Pursuing '}
                        Grades={''}
                        College={'D Y Patil College of Engineering Akurdi, Pune '} 
                        University={'Savitribai Phule Pune University'}
                        
                    />
                    <ResumeItem 
                        year={'2017 - 2019'} 
                        CourseDetails={' HSC '}
                        Grades={'72.62%'}
                        College={'J.T.S.S.P. Mandal Junnar Shri Shiv chatrapati College, Junnar'} 
                        University={'Savitribai Phule Pune University'}
                        
                    />
                    <ResumeItem 
                        year={'2016 - 2017'} 
                        CourseDetails={' SSC '}
                        Grades={'86.80%'}
                        College={'Late Prof. Ramkrushna More English Medium School, Junnar'} 
                        
                    />
                    
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
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
