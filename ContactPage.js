import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import emailjs from "emailjs-com";
import PrimaryButton from "../Components/PrimaryButton";




function ContactPage() {
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
   
    emailjs
      .sendForm(
        "service_fhdptoa",
        "template_2tfts8i",
        e.target,
        "user_7kIkPag8ITVAoBBB9xTTx"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={sendEmail}>
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="email" name="user_email" id="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="text" name="subject" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={"Send Email"} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              phone={"+91-8378831477"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              email={"moresahil4502@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              address={"Pune, Maharashtra"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 100%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .btn {
        background-color: #191d2b;
        color: white;
        align-items: center;
        margin-bottom: 5px;
        cursor: pointer;
        width: 100%;
        border-radius: 5px;
        font-size: 25px;
      }
      .btn:hover {
        cursor: pointer;
        color: black;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid #cbced8;
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }

        textarea {
          background-color: transparent;
          border: 1px solid #cbced8;
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
       
      }
    }
  }
`;

export default ContactPage;
