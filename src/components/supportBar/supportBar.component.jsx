import React from 'react';
import { useTranslation } from 'react-i18next';
import './supportBar.styles.css';

const SupportBar = (props) => {
  const { style, onClick } = props;
  const { t } = useTranslation();

  return (
    <div className='support animated' style={style}>
      {t('supportBarTitle')}{' '}
      <span className='btn' name='support' onClick={onClick('support')}>
        {t('supportTeamName')}
      </span>
    </div>
  );
};

export default SupportBar;
