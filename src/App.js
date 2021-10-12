import LangBar from './components/lnagBar/langBar.component';
import Header from './components/header/header.component';
import Button from './components/button/button.component';
import Form from './components/form/form.component';
import SupportBar from './components/supportBar/supportBar.component';
import Copyright from './components/copyright/copyright.component';
import Central from './components/centralBlock/central.component';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <LangBar />
      <Header />
      <Central />
      {/* <Button /> */}
      {/* <Form /> */}
      {/* <SupportBar /> */}
      <Copyright />

      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
