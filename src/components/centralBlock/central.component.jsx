import React from 'react';
import Button from '../button/button.component';
import Form from '../form/form.component';
import SupportBar from '../supportBar/supportBar.component';
import './central.styles.css';

const Central = () => {
  return (
    <div className='block transition'>
      <Button />
      {/* <Form /> */}
      <SupportBar />
    </div>
  );
};

export default Central;
