import React from 'react';
import Button from '../button/button.component';
import Form from '../form/form.component';
import SupportBar from '../supportBar/supportBar.component';
import './central.styles.css';

const Central = (props) => {
  const { showButton, showForm, showSupport } = props.centralUI;
  // console.log(this.props.centralUI);
  const { toggleForm, submitForm, togglePopup, toggleHome } = props.centralHandlers;
  const buttonStyle = { display: showButton ? 'block' : 'none' };
  const formStyle = { display: showForm ? 'block' : 'none' };
  const supportStyle = { display: showSupport ? 'block' : 'none' };
  // console.log('formstyle: ', formStyle);

  return (
    <div className='block transition'>
      <Button style={buttonStyle} onClick={toggleForm} />
      <Form style={formStyle} submit={submitForm} getHome={toggleHome} />
      <SupportBar style={supportStyle} onClick={togglePopup} />
    </div>
  );
};

export default Central;
