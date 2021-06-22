import React, { useState } from 'react';
import { Link } from 'gatsby';
// @ts-ignore
import LogoFlat from '../images/logo_.svg';
import ContactList from './contact-list';

const Logo = () => {
  const [showContacts, setShowContacts] = useState<boolean>(false);
  const row2Classes = showContacts ? 'logo-row-2 show' : 'logo-row-2';

  return (
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
        <ContactList />
      </div>
    </div>
  );
};

export default Logo;
