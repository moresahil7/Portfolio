import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpeg';


function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Sahil</span></h4>
                <p className="paragraph">
                A passionate Full Stack MERN developer from Pune. I love to build amazing things on Web also 
                I am exploring Artificial Intelligence & Machine Learning. I love Playing Chess. 
                I love Trekking when I am away from keyboard.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>State</p>
                        <p>Location</p>
                        <p>Occupation</p>
                        <p>College</p>
                    </div>
                    <div className="info">
                        <p>: Sahil More</p>
                        <p>: 19</p>
                        <p>: Indian </p>
                        <p>: Maharashtra </p>
                        <p>: Junnar, Pune</p>
                        <p>: Student(TE,IT)</p>
                        <p>: D Y Patil College of Engineering, Akurdi, Pune</p>
                    </div>
                </div>
                
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            height: 80vh;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
