import { useAuth0 } from '@auth0/auth0-react';
import './Logout.css';

function Logout (){
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button className="logout-button" onClick={() => logout()}>
                Log Out
            </button>
        )
    )
}

export default Logout