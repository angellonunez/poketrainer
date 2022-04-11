import React from 'react';
import Profile from './Profile';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const Bar = () => {
    return (
        <div className='bar'>
            <Profile />
            <LoginButton />
            <LogoutButton />
        </div>
    )
}

export default Bar