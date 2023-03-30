

import { useAuth0 } from '@auth0/auth0-react';
import Logout from './Logout';
import './Profile.css'

function Profile() {
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
            <div className="profilbody">
                {isAuthenticated && (
                    <article className='column'>
                        {user?.picture && <img className='loginimg' src={user.picture} alt={user?.name} />}
                        <h2 className='profilesize'>{user?.name}</h2>
                        <ul className='profilesize'>{renderUserInfo()}</ul>
                    </article>

                )}
                <Logout />
            </div>
        </>
    );
}

export default Profile;
