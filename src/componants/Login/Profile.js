

import { useAuth0 } from '@auth0/auth0-react';
import Logout from './Logout';
import './Profile.css'

function Profile (){
    const { user, isAuthenticated } = useAuth0();

    const filteredKeys = ["name", "nickname", "email", "birthdate"];

    const renderUserInfo = () => {
        return filteredKeys.map((key) => (
            <li key={key}>
                {key}: {user[key]}
            </li>
        ));
    };

    return (
        <>
            {isAuthenticated && (
                <article className='column'>
                    {user?.picture && <img className='loginimg' src={user.picture} alt={user?.name} />}
                    <h2>{user?.name}</h2>
                    <ul>{renderUserInfo()}</ul>
                </article>
            )}
            <Logout/>
        </>
    );
}

export default Profile;
