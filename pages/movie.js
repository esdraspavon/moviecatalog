import 'isomorphic-fetch'
import Link from 'next/link'
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
// import PodcastList from '../components/PodcastList';
// import PodcastListWithClick from '../components/PodcastListWithClick';
// import Error from './_error'
// import PodcastPlayer from '../components/PodcastPlayer'

export default class Movie extends React.Component {
  
//   constructor(props) {
//     super(props)
//     this.state = { openPodcast: null }
//   }

  static async getInitialProps({ query, res }){
    try{

      let idMovie = query.id
      let reqMovie = await fetch(`https://api.themoviedb.org/3/movie/${ idMovie }?api_key=aeb209169cc4a9768d6b47be200b3374&year=2018&language=es`)
      
      if(reqMovie.status >= 404) {
        res.statusCode=reqMovie.status
        return { movie:null, statusCode:404}

      }
      
      let dataMovie = await reqMovie.json()
      let movie = dataMovie
      
      return { movie, statusCode:200 }
    } catch(e) {
      res.statusCode=503

      return { movie:null, statusCode:503}
    }
      
    }
    
//   openPodcast = (event, podcast) => {
//     event.preventDefault()
//     this.setState({
//       openPodcast: podcast
//     })
//   }

//   closePodcast = (event) => {
//     event.preventDefault()
//     this.setState({
//       openPodcast: null
//     })
//   }
    
    render() {
      const { movie, statusCode } = this.props
    //   const { openPodcast } = this.state
      
      if( statusCode !== 200){
        // return <Error statusCode={statusCode} />
        return <div>Error my amigo</div>
      }
    return <Layout title={movie.title}>
      <div className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }} />

      {/* { openPodcast && 
        <PodcastPlayer clip={ openPodcast } onClose= { this.closePodcast } />
      } */}

      <h1>{ movie.title }</h1>

      {/* { series.length > 0 &&
        <div>
          <h2>Series</h2>
          <ChannelGrid channels={ series }/>
        </div>
      } */}

      <h2>Generos</h2>
      { movie.genres.map((genre) => (
        //   <Link href={`/movie?id=${ movie.id }`} prefetch>
        //   <a key={movie.id} className="movie">
        //   <img src={`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`} />
          <span>{genre.name} </span>
        //   </a>
        //   </Link>
        )) }
        {/* <PodcastList audioClips={audioClips} /> */}
        {/* <PodcastListWithClick podcasts={audioClips}  onClickPodcast={this.openPodcast}/> */}
      

      <style jsx>{`

        .banner {
          width: 100%;
          padding-bottom: 25%;
          background-position: 50% 50%;
          background-size: cover;
          background-color: #aaa;
        }

        
        h1 {
          font-weight: 600;
          padding: 15px;
        }
        h2 {
          padding: 5px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }

        
      `}</style>
      
      </Layout>
  }
}