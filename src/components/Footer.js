import React from "react";
import "./Footer.css";
import { Button4 } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join Us On This New Journey!
        </p>
        <p className="footer-subscription-text">
          You can Subscribe to our monthly letter at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button4 buttonStyle="btn--outline">Subscribe</Button4>
          </form>
        </div>
      </section>
      <div className="col-xs-12">
          <hr className="component-footer__line"/>
      </div>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Memento</h2>
            <Link to="/sign-up">Events</Link>
            <Link to="/">Talks</Link>
            <Link to="/">Career Advices</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social</h2>
            <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="//www.instagram.com/mementocjv/"
              target="_blank"
              aria-label="Instagram">
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="//youtube.com/channel/UCvHjBohzRG_gnYDdA43qwMA"
              target="_blank"
              aria-label="Youtube">
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter">
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </Link>
          </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Copyright © 2020 Memento 
          <p>"Memento" is startup that is looking to provide both Open and closed source
              software as well as teaching interested people on learning to code and 
              create amazing things. Feel free to register and enter this new world of development!.
          </p>
          </small> 
          
        </div>
      </section>
    </div>
  );
}

export default Footer;