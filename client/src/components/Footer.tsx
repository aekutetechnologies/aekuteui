// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Aekute Technologies. All rights
            reserved.
          </p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/company/aekute-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aekutetechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
