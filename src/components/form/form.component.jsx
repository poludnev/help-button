import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import classNames from 'classnames';
import './form.styles.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: '',
      contact: '',
      problemText: '',
    };
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    const data = this.state;
    this.props.submit(data);
    this.setState({
      name: '',
      contact: '',
      text: '',
    });
  };

  render() {
    const { t } = this.props;

    const {
      style: { display },
      getHome,
    } = this.props;
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
          name='name'
          className={classNames('name-1 animated ugol5', zoom)}
          placeholder={t('form.nameInput')}
          value={this.state.name}
          style={{ display }}
          onChange={this.changeHandler}
        />
        <input
          type='text'
          name='contact'
          className={classNames('mail-1 animated ugol5', zoom)}
          placeholder={t('form.emailInput')}
          value={this.state.contact}
          style={{ display }}
          onChange={this.changeHandler}
        />
        <textarea
          rows='10'
          cols='1'
          name='problemText'
          className={classNames('comment-1 animated ugol5', zoom)}
          placeholder={t('form.textArea')}
          value={this.state.problemText}
          style={{ display }}
          onChange={this.changeHandler}
        ></textarea>

        <div className={classNames('bt2 animated', zoom)} style={{ display }}>
          <div className='bt-fon2 ugol5'></div>
          <div className='btn-popup btn ugol5' onClick={this.submitHandler}>
            {t('form.submitButton')}
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Form);
