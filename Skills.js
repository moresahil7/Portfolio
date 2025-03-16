import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';

function Skills() {
    return (
      <SkillsStyled>
        <Title title={"My Skills"} span={"my skills"} />
        <InnerLayout>
          <div className="main">
            <div className="a">
              <h6>Languages</h6>
              <ul>
                <li>C++</li>
                <li>HTML, CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
              </ul>
            </div>

            <div className="b">
              <hr hidden />
              <h6>Libraries/Frameworks, Tools and Database</h6>
              <ul>
                <li>React JS</li>
                <li>Next JS</li>
                <li>Node Js ,Express Js</li>
                <li>Mui, Antd ShadCN</li>
                <li>PostgreSQL</li>
                <li>Git and GitHub</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </InnerLayout>
      </SkillsStyled>
    );
}

const SkillsStyled = styled.section`
      .main{
       display: flexbox;
       flex-direction: row;
       @media screen and (max-width: 502px) {
        display: block;
        
      }
    
      }
   }
   .a{
       margin-right: 12%;
       
   }
   .b{
       margin-left: 12%;
       @media screen and (max-width: 502px) {
        margin-left: 0%;
        margin-top:10%;
        
      }
   }

`;


export default Skills;
