import 'isomorphic-fetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import Error from 'next/error'
import Movie from '../components/Movie'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { openMovie: null }
  }
  static async getInitialProps({ res }){
    try {

      let req = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=aeb209169cc4a9768d6b47be200b3374&year=2018&language=es')
      let { results: movies } = await req.json()
      return { movies, statusCode: 200 }
    } catch(e){
      res.statusCoda = 503
      return { movies:null, statusCode:503 }
    }
  }

  openMovieModal = (event, movie) => {
    event.preventDefault()
    this.setState({
      openMovie: movie
    })
  }

  closeMovieModal = (event) => {
    event.preventDefault()
    this.setState({
      openMovie: null
    })
  }
  
  render() {
    const { movies, statusCode } = this.props
    const { openMovie } = this.state

    if( statusCode !== 200){
      return <Error statusCode={statusCode} />
    }

    return <Layout title="MovieCatalog">
    { openMovie && 
        <Movie movie={ openMovie } onClose= { this.closeMovieModal } />
      }
      
      <ChannelGrid movies={ movies } onClickMovie={ this.openMovieModal }/>
      
    </Layout>
  }  
}