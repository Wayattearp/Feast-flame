import React from 'react';
import logo from '../components/logo.png'
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faLocationDot,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const contacts = [
    { icon: faLocationDot, info: '123 Fourth ave, Fort Lee, NJ, 07024', },
    { icon: faPhone, info: '(123) 456-7890', },
    { icon: faEnvelope, info: 'customer@feast-flame.com', },
];

const socials = [
    { icon: faFacebook, name: 'facebook', },
    { icon: faTwitter, name: 'twitter', },
    { icon: faInstagram, name: 'instagram', },
    { icon: faYoutube, name: 'youtube', },
];

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container grid">
                <img
                    className="site-footer-logo"
                    src={logo}
                    alt="Feast Flame"
                />
                <div className="site-footer-contact">
                    <h4>Contact us</h4>
                    <address>
                        {contacts.map((contact, index) =>
                            <p key={index}>
                                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                            </p>
                        )}
                    </address>
                </div>
                <div className="site-footer-social">
                    <h4>Connect with us</h4>
                    {socials.map((social, index) =>
                        <a
                            id={social.name}
                            key={index}
                            href={`https://www.${social.name}.com`}
                            target="_blank" // opens a new tab
                            rel="noreferrer" //ensures that the linked page cannot access information about the referring page, enhancing security and privacy.
                        >
                            <FontAwesomeIcon icon={social.icon} size="lg" />
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
