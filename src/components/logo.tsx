import React from 'react';
import { Link } from 'gatsby';
// @ts-ignore
import LogoFlat from '../images/logo.svg';

const Logo = () => {
  return (
    <div className="logo mb-2">
      <div>
        <span className="build-time">
          Konstantin Kh. - web-приложения/сайты
        </span>
      </div>
      <Link to="/" className="logo-link">
        <LogoFlat />
      </Link>
      <ul className="contact-list mt-sm">
        <li>
          <a href="tel:+79092800018">+7 909 280 00 18</a>
        </li>
        <li>
          <a href="tg://resolve?domain=kon_kh">telegram@kon_kh</a>
        </li>
        <li>
          <a target="_blank" href="https://wa.me/79092800018">
            WhatsApp@79092800018
          </a>
        </li>
        <li>
          <a target="_blank" href="https://viber.click/79092800018">
            Viber@79092800018
          </a>
        </li>
        <li>
          <a href="mailto:kon-kh@mail.ru">kon-kh@mail.ru</a>
        </li>
      </ul>
    </div>
  );
};

export default Logo;
