import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const Profile = () => {
    // const { user, isAuthenticated } = useAuth0()
    return (
        // isAuthenticated && (
        <div className='profile'>
            {/* <img src={user.picture} alt={user.name} className='profile-picture'/> */}
            <img src='https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png' className='profile-picture'/>
            <h2>Example User</h2>
            <p>@example</p>
            {/* <JSONPretty data={user} /> */}
            {/* {JSON.stringify(user, null, 2)} */}
        </div>
        // )
    )
}

export default Profile