import Link from 'next/link'

export default class ChannelGrid extends React.Component{
    render() {
        const { movies, onClickMovie } = this.props
        return <div>

        <div className="movies">
        { movies.map((movie) => (
          <a key={movie.id} className="movie"
          onClick={ (event) => onClickMovie(event, movie) }>
          <img src={`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`} />
          <h2>{movie.title}</h2>
          </a>
        )) }
      </div>

      <style jsx>{`
          .movies {
              display: grid;
              grid-gap: 15px;
              padding: 15px;
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            .movie {
                display: block;
                border-radius: 3px;
                box-shadow: 0 2px 6px rgba(0,0,0,0.15);
                margin-bottom: 0.5em;
            }
            .movie img {
                width:100%;
            }
            h2{
                padding: 5px;
                font-size: 0.9em;
                font-weight: 600;
                margin: 0;
                text-align:center;
                color: white;
            }
            
            `}
      </style>
    </div> 
    }
}