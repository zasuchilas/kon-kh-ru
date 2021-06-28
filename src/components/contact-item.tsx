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

type ContactItemProps = {
  // children: ReactNode;
  type:
    | 'tel'
    | 'mail'
    | 'telegram'
    | 'whatsapp'
    | 'viber'
    | 'skype'
    | 'vk'
    | 'fb'
    | 'inst';
  hrefContact: string;
  text: string;
};

const ContactItem = (props: ContactItemProps) => {
  const { type, hrefContact, text } = props;
  switch (type) {
    case 'tel':
      return (
        <li>
          <a href={`tel:${hrefContact}`} className="ext-link">
            {text}
            <ExtLink />
          </a>
        </li>
      );
    case 'mail':
      return (
        <li>
          <a
            href={`mailto:${hrefContact}`}
            className="icon-link"
            title={`Email ${hrefContact}`}
          >
            <Email />
          </a>
        </li>
      );
    case 'telegram':
      return (
        <li>
          <a
            href={`tg://resolve?domain=${hrefContact}`}
            className="icon-link"
            title={`Telegram @${hrefContact}`}
          >
            <Telegram />
          </a>
        </li>
      );
    case 'whatsapp':
      return (
        <li>
          <a
            target="_blank"
            href={`https://wa.me/${hrefContact}`}
            className="icon-link"
            title={`WhatsApp ${text}`}
          >
            <WhatsApp />
          </a>
        </li>
      );
    case 'viber':
      return (
        <li>
          <a
            target="_blank"
            href={`https://viber.click/${hrefContact}`}
            className="icon-link"
            title={`Viber ${text}`}
          >
            <Viber />
          </a>
        </li>
      );
    case 'skype':
      return (
        <li>
          <a
            target="_blank"
            href={`${hrefContact}`}
            className="icon-link"
            title={`Skype`}
          >
            <Skype />
          </a>
        </li>
      );
    case 'vk':
      return (
        <li>
          <a
            target="_blank"
            href={`https://vk.me/${hrefContact}`}
            className="icon-link"
            title={`Вконтакте @${hrefContact}`}
          >
            <Vk />
          </a>
        </li>
      );
    case 'fb':
      return (
        <li>
          <a
            target="_blank"
            href={`https://m.me/${hrefContact}`}
            className="icon-link"
            title={`Facebook @${hrefContact}`}
          >
            <Facebook />
          </a>
        </li>
      );
    case 'inst':
      return (
        <li>
          <a
            target="_blank"
            href={`https://www.instagram.com/${hrefContact}`}
            className="icon-link"
            title={`Instagram @${hrefContact}`}
          >
            <Instagram />
          </a>
        </li>
      );
    default:
      return null;
  }
};

export default ContactItem;
