import TextField from "@mui/material/TextField";
import './AllMusic.css'

function AllMusic() {
  
  return (
    <div className="main">

      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          //...
          //..
        />
      </div>
      {/* <List /> */}
      <div>
        <h3>AllMusic</h3>
        <div class="lister-item mode-detail">

          <div class="lister-item-image">
            <a href="/name/nm1482999">
              <img alt="María Valverde" height="209" src="https://m.media-amazon.com/images/M/MV5BNTViMTM1YTAtMWZkOC00MTY1LWFhMDktM2E2ZjMwMzQ5MWMyXkEyXkFqcGdeQXVyMTk4MDc2MzM@._V1_UY209_CR13,0,140,209_AL_.jpg" width="140" />
            </a>        </div>
          <div class="lister-item-content">
            <h3 class="lister-item-header">
              <span class="lister-item-index unbold text-primary">23. </span>
              <a href="/name/nm1482999"> María Valverde
              </a>             </h3>
            <p class="text-muted text-small">
              Actress <span class="ghost">|</span>
              <a href="/title/tt1528100/"> Exodus: Gods and Kings
              </a>                 </p>
            <p>
              She began acting in 2002, when film director Manuel Martin Cuenca chose her from 3000 girls to be the lead actress in his film "The Bolshevik's Weakness". One year later, Maria's work impressed both the audience and the Spanish Film Academy, who awarded her with the Goya for Best Newcomer. Since ...                 </p>
          </div>
        </div>
      </div>

    </div >



  );
}

export default AllMusic;