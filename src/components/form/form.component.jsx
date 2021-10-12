import React from 'react';
import './form.styles.css';

const Form = () => {
  return (
    <div className='form'>
      <input type='text' className='name-1 animated ugol5' placeholder='Name' />
      <input type='text' className='mail-1 animated ugol5' placeholder='E-mail for feedback' />
      <textarea
        rows='10'
        cols='1'
        name='text'
        className='comment-1 animated ugol5'
        placeholder='What is your problem?'
      ></textarea>

      <div className='bt2 animated'>
        <div className='bt-fon2 ugol5'></div>
        <div className='btn-popup btn ugol5'>SEND IT!</div>
      </div>
    </div>
  );
};

export default Form;
