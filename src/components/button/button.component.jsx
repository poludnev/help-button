import React from 'react';
import { useTranslation } from 'react-i18next';
import './button.styles.css';
import classNames from 'classnames';

const Button = ({ style: { display }, onClick }) => {
  const { t } = useTranslation();
  const classes = classNames('bt animated', display === 'none' ? 'zoomOut' : 'zoomIn');

  return (
    <div className={classes} onClick={onClick}>
      <div className='bt-fon'></div>
      <div className='btn-help btn'>{t('helpButton')}</div>
    </div>
  );
};

export default Button;
