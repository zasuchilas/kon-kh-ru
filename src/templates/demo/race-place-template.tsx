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
                    hrefContact="+74951281801"
                    text="+7 (495) 128-18-01"
                  />
                  <ContactItem
                    type="mail"
                    hrefContact="hello@kon-kh.ru"
                    text="hello@kon-kh.ru"
                  />
                  <ContactItem
                    type="telegram"
                    hrefContact="kehitrov"
                    text="kehitrov"
                  />
                </ul>
                <ul className="contact-list-block">
                  <ContactItem
                    type="whatsapp"
                    hrefContact="79010501025"
                    text="+7 (901) 050-10-25"
                  />
                  <ContactItem
                    type="viber"
                    hrefContact="79010501025"
                    text="+7 (901) 050-10-25"
                  />
                  <ContactItem
                    type="skype"
                    hrefContact="https://join.skype.com/invite/NSbuO92l2Jro"
                    text="k.e.hitrov"
                  />
                  <ContactItem
                    type="vk"
                    hrefContact="k.e.hitrov"
                    text="k.e.hitrov"
                  />
                  <ContactItem
                    type="fb"
                    hrefContact="k.e.hitrov"
                    text="k.e.hitrov"
                  />
                  <ContactItem
                    type="inst"
                    hrefContact="k.e.hitrov"
                    text="k.e.hitrov"
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
