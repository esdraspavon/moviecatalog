import 'isomorphic-fetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import Error from 'next/error'

export default class extends React.Component {
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
  
  render() {
    const { movies, statusCode } = this.props

    if( statusCode !== 200){
      return <Error statusCode={statusCode} />
    }

    return <Layout title="MovieCatalog">
      
      <ChannelGrid movies={ movies } />
      
    </Layout>
  }  
}