import React from "react";
import Logo from "../../assets/logo.svg";
import { useLocation, useParams } from "react-router-dom";
import { Footer as FooterDiv } from "flowbite-react";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className=" bottom-0 w-full bg-[#1995AD] text-white shadow">
      {/* <FooterDiv className="bg-[#1995AD] text-white shadow"> */}
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo} className="h-20" alt="Logo" />
            </a>
            <ul className="flex items-center mb-6 text-sm font-medium text-white sm:mb-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-white sm:text-center">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Contrátame
            </a>
            . Todos los derechos reservados.
          </span>
        </div>
      {/* </FooterDiv> */}
    </footer>
  );
};

export default Footer;
