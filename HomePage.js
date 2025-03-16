import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particle';
import { Instagram, Twitter, GitHub, LinkedIn } from "@material-ui/icons";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hey, I'm <span>Sahil More.</span>
        </h1>
        <b>
          <em>I break things until they work.</em>
        </b>
        <p>
          As a Software Engineer at Uptycs, I design and enhance user-facing
          features for our security platform. My focus is on building intuitive
          and efficient interfaces that empower users to analyze and manage
          security data seamlessly. I’m passionate about improving user
          experiences, streamlining workflows, and delivering high-quality
          solutions that make a real impact.
          <br />
          When I’m not coding, you’ll find me exploring new technologies or
          trekking with friends, or going on long bike rides.
        </p>

        <strong>
          Let’s connect! You can find me on my social handles below.
        </strong>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/moresahil7/"
            target="_blank"
            className="icon i-linkedin"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/moresahil7"
            target="_blank"
            className="icon i-github"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="https://www.instagram.com/moresahil7/"
            target="_blank"
            className="icon i-instagram"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com/moresahil7"
            target="_blank"
            className="icon i-twitter"
            rel="noreferrer"
          >
            <Twitter />
          </a>

          {/* <a
            href="https://leetcode.com/moresahil7/"
            target="_blank"
            className=""
            rel="noreferrer"
          >
            <img src={leetcode} alt="" />
          </a> */}
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    font-size: 1.1rem;
    /* z-index: -1; */
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid #cbced8;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-instagram {
        &:hover {
          border: 2px solid #db0b5f;
          color: #db0b5f;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #000000;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
