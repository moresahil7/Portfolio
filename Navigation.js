import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar"></div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" activeClassName="active-class" exact>
            Work
          </NavLink>
        </li>
        {/* <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class" exact>Blogs</NavLink>
                </li> */}
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>
          &copy;2021 Created with 💕 by{" "}
          <a href="https://www.linkedin.com/in/moresahil7/">Sahil</a>
        </p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;

    /* border-right: 1px solid ; */
    .avatar{
        width: 100%;
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 2px solid #cbced8;
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    footer{
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 12px;
            display: block;
            text-align: center;
           
        }
        a{
            font-size: 12px;
        }
    }
`;
export default Navigation;
