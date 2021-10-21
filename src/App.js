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
      },
    };
  }

  toggleFormHandler = () => {
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

  submitFormHandler = (formData) => {
    this.setState({
      ...this.state,
      uiState: {
        ...this.state.uiState,
        form: { show: false },
        helpButton: { show: true },
        supportbar: { show: true },
        popup: {
          show: true,
          mode: 'sending',
        },
      },
    });

    fetch('https://poludnev.com/api/button', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(
        (response) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(response);
            }, 2000);
          }),
      )
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'fail') {
        }
        this.setState({
          ...this.state,
          uiState: {
            ...this.state.uiState,
            form: { show: false },
            helpButton: { show: true },
            supportbar: { show: true },
            popup: {
              show: true,
              mode: data.message === 'fail' ? 'fail' : 'sent',
            },
          },
        });
      })
      .catch((e) => {
        this.setState({
          ...this.state,
          uiState: {
            ...this.state.uiState,
            form: { show: false },
            helpButton: { show: true },
            supportbar: { show: true },
            popup: {
              show: true,
              mode: 'fail',
            },
          },
        });
      });
  };

  hidePopupHandler = () => {
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
