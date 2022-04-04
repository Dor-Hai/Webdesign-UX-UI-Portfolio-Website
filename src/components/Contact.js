// SVGs
import { ReactComponent as EmailIcon } from '../images/email.svg';
import { ReactComponent as PhoneIcon } from '../images/phone.svg';
import { ReactComponent as LinkedinIcon } from '../images/linkedin.svg';
import { ReactComponent as GithubIcon } from '../images/github.svg';

import './Contact.css';

export default function Contact() {
  return (
    <div className="contact">
        <div className="flex-container">
            <div className="row">
                <EmailIcon />
            </div>
            <div className="row">
                <p>Email:</p>
                <a href="mailto:mrkovakova@gmail.com">mrkovakova@gmail.com</a>
            </div>
        </div>
        <div className="flex-container">
            <div className="row">
                <PhoneIcon />
            </div>
            <div className="row">
                <p>Mobile:</p>
                <a href="tel:+972546200010">+972 (0) 546-2000-10</a>
            </div>
        </div>
        <div className="flex-container">
            <div className="row">
                <LinkedinIcon />
            </div>
            <div className="row">
                <p>LinkedIn:</p>
                <a href="https://www.linkedin.com/in/haidor/" target='_blank' rel="noreferrer">linkedin.com/in/haidor</a>
            </div>
        </div>
        <div className="flex-container">
            <div className="row">
                <GithubIcon />
            </div>
            <div className="row">
                <p>Github:</p>
                <a href="https://github.com/Dor-Hai" target='_blank' rel="noreferrer">github.com/Dor-Hai</a>
            </div>
        </div>
    </div>
  )
}
