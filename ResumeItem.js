import React from 'react'
import styled from 'styled-components';

function ResumeItem({
  year,
  CourseDetails,
  University,
  College,
  Grades,
  link,
}) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h6>{CourseDetails}</h6>

        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <h5>{College}</h5>
          </a>
        ) : (
          <h5>{College}</h5>
        )}

        <strong>{Grades}</strong>
        <p>{University}</p>
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
    display: flex;
    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
        width: 50%;
        padding-left: 20px;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid #cbced8;
            background-color: var(--background-dark-color);
        }
        p{
            display: inline-block;
        }
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: #cbced8;
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }
    }
`;
export default ResumeItem;
