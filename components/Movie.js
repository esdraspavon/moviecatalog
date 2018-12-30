export default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            genres:[]
        }

    }

    componentDidMount(){
        const { movie } = this.props
        // let req = fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=aeb209169cc4a9768d6b47be200b3374&year=2018&language=es`)
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=aeb209169cc4a9768d6b47be200b3374&year=2018&language=es`)
        .then(response => response.json())
        .then(data =>this.setState({ genres: data.genres }));
    }
  render() {
    const { movie, onClose } = this.props
    const { genres } = this.state

    return <div className="modal">
    <div className='movie'>
      <nav>
          <a onClick={onClose}>&lt; Volver</a>
      </nav>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/> 
      <div className="modal-title">
        <h1>{ movie.title }</h1>
      </div>
      <div className="modal-description">
        <p>{movie.overview}</p>
      </div>
      <div className="movie-genres">

        { genres.map((genre) => (
          //   <Link href={`/movie?id=${ movie.id }`} prefetch>
          //   <a key={movie.id} className="movie">
          //   <img src={`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`} />
          <span className="movie-genre" key={ genre.id }>{genre.name} </span>
          //   </a>
          //   </Link>
          )) }
      </div>
    </div>

    <style jsx>{`
      nav {
        background: none;
      }
      nav a {
        display: inline-block;
        padding: 15px;
        color: white;
        cursor: pointer;
        text-decoration: none;
      }

      .banner {
        width: 100%;
        height: 100%;
        background-position: 50% 50%;
        background-size: cover;
        background-color: #aaa;
      }
      .movie {
        display: flex;
        min-height: 100%;
        flex-direction: column;
        background: #141414;
        color: white;
      }
      picture {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1;
        flex-direction: column;
        width: auto;
        padding: 10%;
      }
      picture div {
        width: 100%;
        height: 100%;
        background-position: 50% 50%;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .player {
        padding: 30px;
        background: rgba(0,0,0,0.3);
        text-align: center;
      }
      h1{
        font-size:23px;
      }
      h2 {
        font-size:17px;
        margin: 0;
      }
      h6 {
        margin: 0;
        margin-top: 1em;
      }
      audio {
        margin-top: 2em;
        width: 100%;
      }

      .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99999;
        overflow-y:auto;
      }
      .modal-title{
        text-align: center;
      }
      .modal-description{
        margin:15px;
      }
      .movie-genre{
        background:green;
        padding:5px;
        margin-right:5px;
        border-radius:5px;
      }
      .movie-genres{
        display:flex;
        margin: 15px;
      }
    `}</style>
      <style jsx global>{`
      body{
        overflow:hidden;
      }
        `}
      </style>
  </div>
    
    

  }
}

