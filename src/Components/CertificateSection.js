import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from './Title';
import CertCard from './CertCard';



function ServicesSection() {
    return (
        <InnerLayout>
            <CertSectionStyled>
                <Title title={'Certification'} span={'Certificates'} />
                <div className="certificate">
                    <CertCard 
                        link={'https://drive.google.com/file/d/1ZMjW_pdIzTZgPjNx-LLzkrm4440St7t3/view?usp=sharing'} 
                        title={'Completed Full Stack MERN BootCamp and got certified by passing all criterias.'} 
                    />
                    <CertCard 
                        link={'https://drive.google.com/file/d/1_OfuyzcsR2n14L2b3jeBE5VhTP4DKveO/view?usp=sharing'} 
                        title={'Completed the TCS iON Career Edge Young Professional Course by TCS.'} 
                    />
                    <CertCard 
                        link={'https://drive.google.com/file/d/13XWV58-VeIQ3sT5uMB6vbzc5VxkY2JPL/view?usp=sharing'} 
                        title={'Completed Java Core and Advanced Course and got certified by passing all Criterias.'} 
                    />
                   
                    
                </div>
            </CertSectionStyled>
        </InnerLayout>
    )
}

const CertSectionStyled = styled.section`
    .certificate{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
