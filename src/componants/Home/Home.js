import Button from 'react-bootstrap/Button';
import "../Home/Home.css"
import { useAuth0 } from "@auth0/auth0-react";
import "../button/home-btn.css"
import axios from 'axios';
import { useEffect } from 'react';




function Home() {
    const { user, isAuthenticated } = useAuth0();
    
    const sendRequest = async () => {
        const obj = {
            email: user.email,
            name: user.name,
            picture: user.picture,
            birthday: "user.birthday"
        }

        console.log(obj);

        const serverURL = "https://backend-production-8a11.up.railway.app/user";
        await axios.post(serverURL, JSON.stringify(obj));

    }


    // useEffect(() => {
    //     sendRequest()
    // }, []);


    return (
        <>

            <div className='banner2'>
                <div className='bannerstexts'>
                    <p className='hometext'>Get ready to immerse yourself in an epic gaming journey like no other, where every level is a new adventure and every challenge is a chance to prove yourself</p>
                    <Button className='btn-Fav' variant='Secondary' href='/games'>Browse games</Button>
                </div>
            </div>



            <div className='banner1'>
                <div className='bannerstexts'>
                    <p className='hometext'>sign up for free and get to add your favorite lists and your favorite games on it</p>
                    <Button className='btn-Fav' variant='Secondary' href={isAuthenticated ? '/Games' : '/login'}>
                        {isAuthenticated ? 'Browse games' : 'Get Started'}
                    </Button>
                </div>
            </div>



            <div className='banner3'>
                <div className='bannerstexts'>
                    <p className='hometext'>Read more about us</p>
                    <Button className='btn-Fav' variant='Secondary' href='/AboutUs'>About us</Button>
                </div>
            </div>
        </>
    );
}

export default Home;