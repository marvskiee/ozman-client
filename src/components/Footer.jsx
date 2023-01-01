import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/ozma-logo.png";

const Footer = () => {
  const facebookLink = "https://www.facebook.com/AIOWirelessPH";

  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "News",
      path: "/news",
    },
    {
      id: 3,
      name: "Support",
      path: "/support",
    },
    {
      id: 4,
      name: "About",
      path: "/about",
    },
  ];

  return (
    <footer className="bg-primary">
      <section className="container grid-cols-12 gap-7 px-4 py-10 md:grid">
        <div className="col-span-7 mb-8 md:mb-0">
          <img src={Logo} className="w-24" alt="Logo" />
          <p className="py-5 text-sm text-gray-200">
            Get in touch & let's make something awesome toghether!
          </p>
          <Link to="/apply" className="footer-apply-btn">
            Apply Now
          </Link>
        </div>
        <div className="col-span-3">
          <h4 className="pb-3 font-semibold text-white">Links</h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-200 hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 mt-8 md:mt-0">
          <h4 className="pb-3 font-semibold text-white">Contact Us</h4>
          <ul className="space-y-3">
            <li className="text-sm text-gray-200">
              <a
                href={facebookLink}
                target="_blank"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li className="text-sm text-gray-200">mark@aiowireless.ph</li>
            <li className="text-sm text-gray-200">09478451828</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
