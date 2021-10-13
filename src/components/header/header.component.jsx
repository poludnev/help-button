import React from 'react';
import { useTranslation } from 'react-i18next';
import './header.styles.css';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className='header'>
      {' '}
      <h1>
        <span>{t('title.part1')}</span>
        {t('title.part2')}
      </h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default Header;
