import React from 'react';
import './langBar.styles.css';
import eng from './eng.png';
import rus from './rus.png';

const LangBar = () => {
  return (
    <div className='bl_lang'>
      <div className='lang'>Choose the language</div>
      <div className='country'>
        <a href='#' className='inactive'>
          <img src={rus} alt='' />
        </a>
        <a href='#' className='active'>
          <img src={eng} alt='' />
        </a>
      </div>
    </div>
  );
};

export default LangBar;
