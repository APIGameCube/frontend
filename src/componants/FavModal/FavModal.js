import "./FavModal.css"



function FavModal() {

  const [addFeedBack, setAddComment] = useState('');
  function handleCommment(event) {
      setAddComment(event.target.value);
  }

  const fetchRes = async () => {
    await fetch('https://backend-black-nu.vercel.app/addGame', {

        method: 'POST',

        body: JSON.stringify({
          title: `${gamesArr.title}`, 
          thumbnail: `${gamesArr.thumbnail}`, 
          genre:`${gamesArr.genre}`,
          platform:`${gamesArr.platform}`,
          publisher:`${gamesArr.publisher}`,
          developer:`${gamesArr.developer}`, 
          release_date:`${gamesArr.release_date}`, 
          short_description:`${gamesArr.short_description}`, 
          game_url:`${gamesArr.game_url}`, 
          comment:addFeedBack
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8', },
    })

}
  return (
    <>
       
    </>
  );
}

export default FavModal;
