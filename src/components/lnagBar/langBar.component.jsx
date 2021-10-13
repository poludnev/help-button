import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import './langBar.styles.css';
import eng from './img/eng.png';
import rus from './img/rus.png';

const LangBar = () => {
  const { t, i18n } = useTranslation();

  const lang = i18n.language;

  const classNameEn = classNames(lang === 'en' ? 'active' : 'inactive');
  const classNameRu = classNames(lang === 'ru' ? 'active' : 'inactive');

  return (
    <div className='bl_lang'>
      <div className='lang'>{t('langBarTitle')}</div>
      <div className='country'>
        <span className={classNameRu} onClick={() => i18n.changeLanguage('ru')}>
          <img src={rus} alt='ru' />
        </span>
        <span className={classNameEn} onClick={() => i18n.changeLanguage('en')}>
          <img src={eng} alt='en' />
        </span>
      </div>
    </div>
  );
};

export default LangBar;
