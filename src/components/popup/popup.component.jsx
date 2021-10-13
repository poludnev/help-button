import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import air from './img/air.png';
import parseStringToHTML from 'html-react-parser';
import './popup.styles.css';

const Popup = (props) => {
  const { hidePopup, popupUI } = props;
  const { t } = useTranslation();

  const displayScroll = popupUI.show ? 'block' : 'none';

  const imgDisplay = popupUI.mode === 'sent' ? 'inline' : 'none';

  const popupClasses = classNames(`popup-${popupUI.mode} ugol5`);

  return (
    <div className='scroll' style={{ display: displayScroll }} onClick={hidePopup}>
      <div className='hover'></div>
      <div className={popupClasses} style={{ display: displayScroll }}>
        <img src={air} alt='' style={{ display: imgDisplay }} />
        <div className='title'>{t(`popup.${popupUI.mode}.title`)}</div>
        <div className='desc'>{parseStringToHTML(t(`popup.${popupUI.mode}.body`))}</div>
      </div>
    </div>
  );
};

export default Popup;
