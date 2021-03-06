import React from 'react';
// @ts-ignore
import LogoFlat from '../images/logo.svg';
// @ts-ignore
import Facebook from '../images/facebook.svg';
// @ts-ignore
import Instagram from '../images/instagram.svg';
// @ts-ignore
import Vk from '../images/vk_.svg';
// @ts-ignore
import Email from '../images/email_.svg';
// @ts-ignore
import ExtLink from '../images/diagonal-arrow.svg';
// @ts-ignore
import Telegram from '../images/telegram.svg';
// @ts-ignore
import WhatsApp from '../images/whatsapp.svg';
// @ts-ignore
import Viber from '../images/viber.svg';
// @ts-ignore
import Skype from '../images/skype.svg';
// @ts-ignore
import Messenger from '../images/messenger.svg';
// @ts-ignore
import Write from '../images/notebook.svg';

const ContactList = () => {
  return (
    <div className="contact-list">
      <ul className="contact-list-block">
        <li>
          <a href="tel:+74951281801" className="ext-link">
            +7 (495) 128-18-01
            <ExtLink />
          </a>
        </li>
        <li>
          <a
            href="mailto:hello@kon-kh.ru"
            className="icon-link"
            title="Email hello@kon-kh.ru"
          >
            <Email />
          </a>
        </li>
        <li>
          <a
            href="tg://resolve?domain=kehitrov"
            className="icon-link"
            title="Telegram @kehitrov"
          >
            <Telegram />
          </a>
        </li>
      </ul>
      <ul className="contact-list-block">
        <li>
          <a
            target="_blank"
            href="https://wa.me/79010501025"
            className="icon-link"
            title="WhatsApp +7 (901) 050-10-25"
          >
            <WhatsApp />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://viber.click/79010501025"
            className="icon-link"
            title="Viber +7 (901) 050-10-25"
          >
            <Viber />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://join.skype.com/invite/NSbuO92l2Jro"
            className="icon-link"
            title="Skype @k.e.hitrov"
          >
            <Skype />
          </a>
          {/*<a*/}
          {/*  target="_blank"*/}
          {/*  href="https://skype:k.e.hitrov?chat"*/}
          {/*  className="icon-link"*/}
          {/*  title="Skype @k.e.hitrov"*/}
          {/*>*/}
          {/*  <Skype />*/}
          {/*</a>*/}
        </li>
        <li>
          <a
            target="_blank"
            href="https://vk.me/k.e.hitrov"
            className="icon-link"
            title="?????????????????? @k.e.hitrov"
          >
            <Vk />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://m.me/k.e.hitrov"
            className="icon-link"
            title="Facebook @k.e.hitrov"
          >
            <Facebook />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/k.e.hitrov/"
            className="icon-link"
            title="Instagram @k.e.hitrov"
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactList;
