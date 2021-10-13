import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import './form.styles.css';

const Form = ({ style: { display }, submit, getHome }) => {
  const { t } = useTranslation();
  const zoom = display === 'none' ? 'zoomOut' : 'zoomIn';

  return (
    <div className='form '>
      <div className={classNames('bt3 animated', zoom)} style={{ display }}>
        <div className='bt-fon3 ugol5'></div>
        <div className='btn-popup3 btn ugol5' onClick={getHome}>
          {t('form.backButton')}
        </div>
      </div>
      <input
        type='text'
        className={classNames('name-1 animated ugol5', zoom)}
        placeholder={t('form.nameInput')}
        style={{ display }}
      />
      <input
        type='text'
        className={classNames('mail-1 animated ugol5', zoom)}
        placeholder={t('form.emailInput')}
        style={{ display }}
      />
      <textarea
        rows='10'
        cols='1'
        name='text'
        className={classNames('comment-1 animated ugol5', zoom)}
        placeholder={t('form.textArea')}
        style={{ display }}
      ></textarea>

      <div className={classNames('bt2 animated', zoom)} style={{ display }}>
        <div className='bt-fon2 ugol5'></div>
        <div className='btn-popup btn ugol5' onClick={submit}>
          {t('form.submitButton')}
        </div>
      </div>
    </div>
  );
};

export default Form;
