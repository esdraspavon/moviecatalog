import 'isomorphic-fetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import Error from 'next/error'
import Movie from '../components/Movie'
import Search from '../components/Search'
import Spinner from '../components/Spinner'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openMovie: null,
      query:"",
      isLoading:false,
      results:[]
    }
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
handleSubmit = event => {
    event.preventDefault();
    if (this.state.query) {
      this.setState({
        isLoading:true,
      })
      fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.query}&api_key=aeb209169cc4a9768d6b47be200b3374&language=es`)
          .then(response => response.json())
          .then(data =>this.setState({ results: data.results, isLoading:false }));
    }else{
      this.setState({
        results:[]
      })
    }
}
setInputRef = element => {
    this.input = element;
}
handleInputChange = event => {
    this.setState({
        query:event.target.value,
    })
}
  render() {
    const { movies, statusCode } = this.props
    const { openMovie, isLoading } = this.state

    if( statusCode !== 200){
      return <Error statusCode={statusCode} />
    }

    return <Layout title="MovieCatalog">
    { openMovie && 
        <Movie movie={ openMovie } onClose= { this.closeMovieModal } />
      }
      <Search
      setRef={this.setInputRef}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleInputChange}
      value={this.state.query}
      />
      {isLoading ?
        <Spinner />
        : this.state.results.length > 0 ?
          <ChannelGrid movies={ this.state.results } onClickMovie={ this.openMovieModal }/>
          :
          <ChannelGrid movies={ movies } onClickMovie={ this.openMovieModal }/>
        }
      } 
      
    </Layout>
  }  
}