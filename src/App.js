import React from 'react';
import LangBar from './components/lnagBar/langBar.component';
import Header from './components/header/header.component';
import Copyright from './components/copyright/copyright.component';
import Central from './components/centralBlock/central.component';
import Popup from './components/popup/popup.component';
import './i18n/config.js';
import './App.css';
import './animate.min.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      uiState: {
        lang: 'en',
        popup: {
          show: false,
          mode: 'support',
        },
        form: {
          show: false,
        },
        helpButton: {
          show: true,
        },
        supportbar: {
          show: true,
        },
        showPopup: false,
        popupType: 'support',
      },
    };
  }

  toggleFormHandler = () => {
    console.log('form toggled');
    this.setState({
      ...this.state,
      uiState: {
        ...this.state.uiState,
        form: { show: true },
        helpButton: { show: false },
        supportbar: { show: false },
      },
    });
  };

  sendFormData = () => {
    console.log('form data is sending');
  };

  submitFormHandler = () => {
    console.log('form submitted');
    this.sendFormData();
    this.setState({
      ...this.state,
      uiState: {
        ...this.state.uiState,
        form: { show: false },
        helpButton: { show: true },
        supportbar: { show: true },
        popup: {
          show: true,
          mode: 'sent',
        },
      },
    });
  };

  hidePopupHandler = () => {
    console.log('popup hidden');
    this.setState({
      ...this.state,
      uiState: {
        ...this.state.uiState,
        popup: {
          ...this.state.uiState.popup,
          show: false,
        },
      },
    });
  };

  showPopupHandler = (popupMode) => (e) => {
    this.setState({
      ...this.state,
      uiState: {
        ...this.state.uiState,
        popup: {
          ...this.state.uiState.popup,
          show: true,
          mode: popupMode,
        },
      },
    });
  };

  toggleHome = () => {
    this.setState({
      ...this.state,
      uiState: {
        ...this.state.uiState,
        form: { show: false },
        helpButton: { show: true },
        supportbar: { show: true },
      },
    });
  };

  render() {
    const { form, helpButton, supportbar, popup } = this.state.uiState;
    const centralUI = {
      showForm: form.show,
      showButton: helpButton.show,
      showSupport: supportbar.show,
    };
    const centralHandlers = {
      toggleForm: this.toggleFormHandler,
      submitForm: this.submitFormHandler,
      togglePopup: this.showPopupHandler,
      toggleHome: this.toggleHome,
    };
    const popupUI = {
      show: popup.show,
      mode: popup.mode,
      height: this.state.height,
    };
    return (
      <div className='App'>
        <LangBar changeLanguage={this.changeLanguage} />
        <Header />
        <Central centralUI={centralUI} centralHandlers={centralHandlers} />
        <Copyright />
        <Popup popupUI={popupUI} hidePopup={this.hidePopupHandler} />
      </div>
    );
  }
}

export default App;
