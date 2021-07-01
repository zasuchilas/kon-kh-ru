import React from 'react';

// @ts-ignore
import Facebook from '../images/facebook.svg';
// @ts-ignore
import FacebookBlack from '../images/social-logo-2/facebook.svg';

// @ts-ignore
import Instagram from '../images/instagram.svg';
// @ts-ignore
import InstagramBlack from '../images/social-logo-2/instagram.svg';

// @ts-ignore
import Vk from '../images/vk_.svg';
// @ts-ignore
import VkBlack from '../images/social-logo-2/vk.svg';

// @ts-ignore
import Email from '../images/email_.svg';
// @ts-ignore
import EmailBlack from '../images/social-logo-2/email.svg';

// @ts-ignore
import ExtLink from '../images/diagonal-arrow.svg';

// @ts-ignore
import Telegram from '../images/telegram.svg';
// @ts-ignore
import TelegramBlack from '../images/social-logo-2/telegram.svg';

// @ts-ignore
import WhatsApp from '../images/whatsapp.svg';
// @ts-ignore
import WhatsAppBlack from '../images/social-logo-2/whatsapp.svg';

// @ts-ignore
import Viber from '../images/viber.svg';
// @ts-ignore
import ViberBlack from '../images/social-logo-2/viber.svg';

// @ts-ignore
import Skype from '../images/skype.svg';
// @ts-ignore
import SkypeBlack from '../images/social-logo-2/skype.svg';

// @ts-ignore
import Messenger from '../images/messenger.svg';
// @ts-ignore
import MessengerBlack from '../images/social-logo-2/messenger.svg';

// @ts-ignore
import TwitterBlack from '../images/social-logo-2/twitter.svg';

// @ts-ignore
import YoutubeBlack from '../images/social-logo-2/youtube.svg';

// @ts-ignore
import Write from '../images/notebook.svg';

// type ContactItemProps = {
//   // children: ReactNode;
//   type:
//     | 'tel'
//     | 'mail'
//     | 'telegram'
//     | 'whatsapp'
//     | 'viber'
//     | 'skype'
//     | 'vk'
//     | 'fb'
//     | 'inst';
//   hrefContact: string;
//   text: string;
// };

type ContactItemProp =
  | {
      type: 'tel';
      hrefBase: 'tel:' | '';
      hrefContact: string;
      textBase: '';
      textContact: string;
      view: 'text';
      target?: 'blank';
    }
  | {
      type: 'mail';
      hrefBase: 'mailto:' | '';
      hrefContact: string;
      textBase: 'Email ' | '';
      textContact: string;
      view: 'text' | 'color-icon' | 'black-icon';
      target?: 'blank';
    }
  | {
      type: 'telegram';
      hrefBase: 'tg://resolve?domain=' | '';
      hrefContact: string;
      textBase: 'Telegram @' | '';
      textContact: string;
      view: 'text' | 'color-icon' | 'black-icon';
      target?: 'blank';
    }
  | {
      type: 'whatsapp';
      hrefBase: 'https://wa.me/' | '';
      hrefContact: string;
      textBase: 'WhatsApp ' | '';
      textContact: string;
      view: 'text' | 'color-icon' | 'black-icon';
      target?: 'blank';
    }
  | {
      type: 'viber';
      hrefBase: 'https://viber.click/' | '';
      hrefContact: string;
      textBase: 'Viber ' | '';
      textContact: string;
      view: 'text' | 'color-icon' | 'black-icon';
      target?: 'blank';
    }
  | {
      type: 'skype';
      hrefBase: 'https://join.skype.com/invite/' | '';
      hrefContact: string;
      textBase: 'Skype ' | '';
      textContact: string;
      view: 'text' | 'color-icon' | 'black-icon';
      target?: 'blank';
    }
  | {
      type: 'vk';
      hrefBase: 'https://vk.me/' | '';
      hrefContact: string;
      textBase: 'Вконтакте @' | '';
      textContact: string;
      view: 'text' | 'color-icon' | 'black-icon';
      target?: 'blank';
    }
  | {
      type: 'fb';
      hrefBase: 'https://m.me/' | '';
      hrefContact: string;
      textBase: 'Facebook @' | '';
      textContact: string;
      view: 'text' | 'color-icon' | 'black-icon';
      target?: 'blank';
    }
  | {
      type: 'inst';
      hrefBase: 'https://www.instagram.com/' | '';
      hrefContact: string;
      textBase: 'Instagram @' | '';
      textContact: string;
      view: 'text' | 'color-icon' | 'black-icon';
      target?: 'blank';
    }
  | {
      type: 'twitter';
      hrefBase: 'https://www.instagram.com/' | '';
      hrefContact: string;
      textBase: 'Twitter @' | '';
      textContact: string;
      view: 'text' | 'black-icon';
      target?: 'blank';
    }
  | {
      type: 'youtube';
      hrefBase: 'https://www.instagram.com/' | '';
      hrefContact: string;
      textBase: 'Youtube ' | '';
      textContact: string;
      view: 'text' | 'black-icon';
      target?: 'blank';
    };

function getHref({ hrefBase, hrefContact }: ContactItemProp): string {
  return `${hrefBase}${hrefContact}`;
}

function getText({ textBase, textContact }: ContactItemProp): string {
  return `${textBase}${textContact}`;
}

const ContactItem = (props: ContactItemProp) => {
  const href = getHref(props);
  const text = getText(props);
  const className = props.view === 'text' ? 'ext-link' : 'icon-link';

  // Важно !
  // 1) для всех внешних ссылок с _blank добавлять noopener чтобы закрыть доступ и возможность фишинга
  // 2) для всех ссылок контактов добавить nofollow чтобы поисковые роботы не шли по этим ссылкам
  const targetAttr =
    props.target === 'blank'
      ? { target: '_blank', rel: 'noopener nofollow' }
      : { rel: 'nofollow' };
  switch (props.type) {
    case 'tel':
      return (
        <li>
          <a href={href} className="ext-link" {...targetAttr}>
            {text}
            <ExtLink />
          </a>
        </li>
      );
    case 'mail':
      return (
        <li>
          <a href={href} className={className} title={text} {...targetAttr}>
            {props.view === 'text' ? (
              'Email'
            ) : props.view === 'color-icon' ? (
              <Email />
            ) : (
              <EmailBlack />
            )}
          </a>
        </li>
      );
    case 'telegram':
      return (
        <li>
          <a href={href} className={className} title={text} {...targetAttr}>
            {props.view === 'text' ? (
              'Telegram'
            ) : props.view === 'color-icon' ? (
              <Telegram />
            ) : (
              <TelegramBlack />
            )}
          </a>
        </li>
      );
    case 'whatsapp':
      return (
        <li>
          <a href={href} className={className} title={text} {...targetAttr}>
            {props.view === 'text' ? (
              'WhatsApp'
            ) : props.view === 'color-icon' ? (
              <WhatsApp />
            ) : (
              <WhatsAppBlack />
            )}
          </a>
        </li>
      );
    case 'viber':
      return (
        <li>
          <a href={href} className={className} title={text} {...targetAttr}>
            {props.view === 'text' ? (
              'Viber'
            ) : props.view === 'color-icon' ? (
              <Viber />
            ) : (
              <ViberBlack />
            )}
          </a>
        </li>
      );
    case 'skype':
      return (
        <li>
          <a href={href} className={className} title={text} {...targetAttr}>
            {props.view === 'text' ? (
              'Skype'
            ) : props.view === 'color-icon' ? (
              <Skype />
            ) : (
              <SkypeBlack />
            )}
          </a>
        </li>
      );
    case 'vk':
      return (
        <li>
          <a href={href} className={className} title={text} {...targetAttr}>
            {props.view === 'text' ? (
              'Вконтакте'
            ) : props.view === 'color-icon' ? (
              <Vk />
            ) : (
              <VkBlack />
            )}
          </a>
        </li>
      );
    case 'fb':
      return (
        <li>
          <a href={href} className={className} title={text} {...targetAttr}>
            {props.view === 'text' ? (
              'Facebook'
            ) : props.view === 'color-icon' ? (
              <Facebook />
            ) : (
              <FacebookBlack />
            )}
          </a>
        </li>
      );
    case 'inst':
      return (
        <li>
          <a href={href} className={className} title={text} {...targetAttr}>
            {props.view === 'text' ? (
              'Instagram'
            ) : props.view === 'color-icon' ? (
              <Instagram />
            ) : (
              <InstagramBlack />
            )}
          </a>
        </li>
      );
    case 'twitter':
      return (
        <li>
          <a href={href} className={className} title={text} {...targetAttr}>
            {props.view === 'text' ? 'Twitter' : <TwitterBlack />}
          </a>
        </li>
      );
    case 'youtube':
      return (
        <li>
          <a href={href} className={className} title={text} {...targetAttr}>
            {props.view === 'text' ? 'Youtube' : <YoutubeBlack />}
          </a>
        </li>
      );
    default:
      return null;
  }
};

export default ContactItem;
