import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particle';
import { Instagram, Twitter,GitHub,Facebook, LinkedIn } from '@material-ui/icons';
import leetcode from '../img/leetcode.svg'
// import {SiLeetcode } from "react-icons/si";

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi,My Name is <span>Sahil More</span></h1>
                <p>
                   IT undergraduate(TE, IT) from <h6>D. Y. Patil College of Engineering, Akurdi, Pune.</h6> Being a Full stack MERN developer I love building 
                   amazing things on Web.Also I am exploring Machine Learning and Artificial Intelligence.I am web developer and 
                   also an Android Enthusiast. I build websites using React Js.  
                   Me along with my Friends plan treks when we are away from keyboard.I love playing Chess in my free time.
                </p>
                <strong>You can connect with me on my social handles.</strong>
                <div className="icons">
                    <a href="https://www.facebook.com/moresahil34/" className="icon i-facebook">
                        <Facebook />
                    </a>
                    <a href="https://github.com/moresahil7" className="icon i-github">
                        <GitHub />
                    </a>
                    <a href="https://www.instagram.com/moresahil7/" className="icon i-instagram">
                        <Instagram />
                    </a>
                    <a href="https://twitter.com/moresahil7" className="icon i-twitter">
                        <Twitter />
                    </a>
                    <a href="https://www.linkedin.com/in/moresahil7/" className="icon i-linkedin">
                        <LinkedIn />
                    </a>
                    <a href="https://leetcode.com/moresahil7/" className="">
                    <img src={leetcode} alt=""/>
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        /* z-index: -1; */

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid #cbced8;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-instagram{
                &:hover{
                    border: 2px solid #DB0B5F;
                    color: #DB0B5F;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #000000;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
