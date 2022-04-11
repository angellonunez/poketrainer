import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Bar from './components/Bar';
import Content from './components/Content';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from './components/Modal';
import { useRef } from 'react';
import TeamBuilder from './components/TeamBuilder'

function App() {
  const { isLoading } = useAuth0();

  if(isLoading) return <div>Loading...</div>

  return (
    <>
      <div className='app'>
        <Bar />
        <Content />
      </div>
    </>
  );
}

export default App;
