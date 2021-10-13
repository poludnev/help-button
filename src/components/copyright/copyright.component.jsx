import React from 'react';
import { useTranslation } from 'react-i18next';
import './copyright.styles.css';

const Copyright = () => {
  const { t } = useTranslation();
  return (
    <div className='copyright'>
      {t('year')} © {t('companyName')}
    </div>
  );
};
export default Copyright;
