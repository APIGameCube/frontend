import Button from 'react-bootstrap/Button';
import "../Home/Home.css"


function Home() {
  return (
    <>
      <div className='banner1'>
        <p className='hometext'>sign up for free and get to add your favorite lists and your favorite games on it</p>
        <Button className='btn' href='/Login'>Get Started</Button>
      </div>
      <div className='banner2'>
        <p className='hometext'>amuse your day and make some noise free your self and enjoy your life</p>
        <Button className='btn' href='/music'>Browse games</Button>
      </div>
      <div className='banner3'>
        <p className='hometext'>Read more about us</p>
        <Button className='btn' href='/AboutUs'>About us</Button>
      </div>
    </>

  );
}

export default Home;