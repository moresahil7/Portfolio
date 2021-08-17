import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="main">
                        <div className="a">
                       <h6>Skills and Languages :</h6>
                       <ul>
                           <li >
                           Web Development
                           </li>
                           <li>
                           Wordpress
                           </li>
                           <li>
                           Figma
                           </li>
                           <li>
                           HTML, CSS, Javascript
                           </li>
                           <li>
                           Java, Python
                           </li>
                           <li>
                           CPP, C
                           </li>
                       </ul>
                       </div>
                       
                       <div className="b">
                       <h6>Libraries and Frameworks</h6>
                       
                       <ul>
                           <li>
                           React Js
                           </li>
                           <li>
                           Bootstrap
                           </li>
                           <li>
                           Django
                           </li>
                           <li>
                           Node Js ,Express Js
                           </li>
                           <li>
                           MongoDB, My SQL

                           </li>
                           <li>
                           Git and GitHub
                           </li>
                       </ul>
                       </div>
                       </div>
                   
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
      .main{
       display: flexbox;
       flex-direction: row;
   }
   .a{
       margin-right: 12%;
   }
   .b{
       margin-left: 12%;
   }

`;


export default Skills;
