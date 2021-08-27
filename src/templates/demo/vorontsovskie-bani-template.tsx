import { Link } from 'gatsby';
import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { DemoPageProps } from '../../models/demo-models';

import ContactItem from '../../components/contact-item';
// @ts-ignore
import LogoFlat from '../../images/vorontsovskie-bani/logo.svg';
// @ts-ignore
import Favicon from '../../images/vorontsovskie-bani/favicon.svg';

// interface DemoPageProps extends PageProps {
//   pageContext: {
//     html: string;
//     siteMetadata: SiteMetadata;
//     markdownMetadata: MarkdownMetadata;
//   };
// }

const site = 'vorontsovskie-bani.ru';

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

  const documentClickHandler = (e: MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target?.id === 'map-wrapper') {
      const map = e.target.children[0];
      if (map instanceof HTMLElement) {
        const prev = map.style.pointerEvents;
        const next = prev === 'none' ? 'auto' : 'none';
        map.style.setProperty('pointer-events', next);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', documentClickHandler);
    return () => {
      document.removeEventListener('click', documentClickHandler);
    };
  }, []);

  return (
    <div id="layout" className={layoutClasses}>
      {!short && (
        <header>
          <div className="logo mb-2" id="logo">
            <div className="logo-row-1">
              <Link to="/" className="logo-link">
                <LogoFlat />
              </Link>
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
                </ul>
                <ul className="contact-list-block">
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
                    hrefBase=""
                    hrefContact="https://teleg.one/raceplacekarting"
                    textBase=""
                    textContact="Telegram"
                    view="black-icon"
                  />
                  <ContactItem
                    type="inst"
                    hrefBase=""
                    hrefContact="https://instagram.com/raceplacekarting?igshid=1fpy0blk6gkjp"
                    textBase=""
                    textContact="Instagram"
                    view="black-icon"
                    target="blank"
                  />
                  <ContactItem
                    type="vk"
                    hrefBase=""
                    hrefContact="https://vk.com/raceplacekarting"
                    textBase=""
                    textContact="Вконтакте"
                    view="black-icon"
                    target="blank"
                  />
                  <ContactItem
                    type="fb"
                    hrefBase=""
                    hrefContact="https://m.facebook.com/raceplacekarting/"
                    textBase=""
                    textContact="Facebook"
                    view="black-icon"
                    target="blank"
                  />
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="contact-btn"
              onClick={() => setShowContacts(!showContacts)}
            >
              Контакты
            </button>
          </div>
        </header>
      )}
      <main>
        <Helmet htmlAttributes={{ lang: 'ru' }} title={title} />
        {htmlBlock}
      </main>
      <footer>
        <div className="footer-row">
          <div>
            <div className="bold">Картинг-Центр RacePlace</div>
            <div>#здесьживутгонки</div>
            <div>#raceplacekarting</div>
          </div>
          <div className="favicon-block">
            <Favicon />
            <div className="bold">{site}</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RacePlaceTemplate;
