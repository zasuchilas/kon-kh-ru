import { Link, PageProps } from 'gatsby';
import { MarkdownMetadata, SiteMetadata } from '../../models/seo-models';
import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';

// @ts-ignore
import LogoFlat from '../../images/race-place/logo.svg';
import ContactItem from '../../components/contact-item';

interface DemoPageProps extends PageProps {
  pageContext: {
    html: string;
    siteMetadata: SiteMetadata;
    markdownMetadata: MarkdownMetadata;
  };
}

const site = 'race-place.ru';

const RacePlaceTemplate = (props: DemoPageProps) => {
  const [showContacts, setShowContacts] = useState<boolean>(false);
  const row2Classes = showContacts ? 'logo-row-2 show' : 'logo-row-2';

  const { html, markdownMetadata } = props.pageContext;
  const { template, demo, title } = markdownMetadata;
  const short = template === 'page';
  const demoRoot = `/demo/${demo}`;

  const layoutClasses = [short ? 'short' : '', demo || ''].join(' ');

  const bread = ` / ${markdownMetadata.title}`;

  const htmlBlock =
    template === 'index' ? (
      <div className="index-page" dangerouslySetInnerHTML={{ __html: html }} />
    ) : (
      <Fragment>
        <div className="bread">
          <Link to={demoRoot}>{site}</Link>
          {bread}
        </div>
        <div
          className="article-page"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Fragment>
    );

  return (
    <div id="layout" className={layoutClasses}>
      {!short && (
        <header>
          <div className="logo mb-2" id="logo">
            <div className="logo-row-1">
              <Link to="/" className="logo-link">
                <LogoFlat />
              </Link>
              <button
                type="button"
                className="contact-btn"
                onClick={() => setShowContacts(!showContacts)}
              >
                Контакты
              </button>
            </div>
            <div className={row2Classes}>
              <div className="contact-list">
                <ul className="contact-list-block">
                  <ContactItem
                    type="tel"
                    hrefBase="tel:"
                    hrefContact="+74994502665"
                    textBase=""
                    textContact="+7 (499) 450-26-65"
                    view="text"
                  />
                  <ContactItem
                    type="mail"
                    hrefBase="mailto:"
                    hrefContact="mail@race-place.ru"
                    textBase="Email "
                    textContact="mail@race-place.ru"
                    view="black-icon"
                  />
                  <ContactItem
                    type="telegram"
                    hrefBase="tg://resolve?domain="
                    hrefContact="kehitrov"
                    textBase="Telegram @"
                    textContact="kehitrov"
                    view="black-icon"
                  />
                </ul>
                <ul className="contact-list-block">
                  <ContactItem
                    type="whatsapp"
                    hrefBase="https://wa.me/"
                    hrefContact="79010501025"
                    textBase="WhatsApp "
                    textContact="+7 (901) 050-10-25"
                    view="black-icon"
                  />
                  <ContactItem
                    type="viber"
                    hrefBase="https://viber.click/"
                    hrefContact="79010501025"
                    textBase="Viber "
                    textContact="+7 (901) 050-10-25"
                    view="black-icon"
                  />
                  <ContactItem
                    type="skype"
                    hrefBase="https://join.skype.com/invite/"
                    hrefContact="NSbuO92l2Jro"
                    textBase="Skype "
                    textContact="k.e.hitrov"
                    view="black-icon"
                  />
                  <ContactItem
                    type="vk"
                    hrefBase="https://vk.me/"
                    hrefContact="k.e.hitrov"
                    textBase="Вконтакте @"
                    textContact="k.e.hitrov"
                    view="black-icon"
                  />
                  <ContactItem
                    type="fb"
                    hrefBase="https://m.me/"
                    hrefContact="k.e.hitrov"
                    textBase="Facebook @"
                    textContact="k.e.hitrov"
                    view="black-icon"
                  />
                  <ContactItem
                    type="inst"
                    hrefBase="https://www.instagram.com/"
                    hrefContact="k.e.hitrov"
                    textBase="Instagram @"
                    textContact="k.e.hitrov"
                    view="black-icon"
                  />
                </ul>
              </div>
            </div>
          </div>
        </header>
      )}
      <main>
        <Helmet htmlAttributes={{ lang: 'ru' }} title={title} />
        {htmlBlock}
      </main>
      <footer>
        <div className="footer-row">
          <div className="bold">1234</div>
          <div className="bold">{site}</div>
        </div>
      </footer>
    </div>
  );
};

export default RacePlaceTemplate;
