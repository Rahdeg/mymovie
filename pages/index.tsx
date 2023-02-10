import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Plan from '../components/Plan'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'
import { products } from '../lib/demo'
import { Movie } from '../typings'
import requests from '../utils/request'

interface Props {
  netflixOriginals:Movie[]
  trendingNow:Movie[]
  topRated:Movie[]
  actionMovies:Movie[]
  horrorMovies:Movie[]
  comedyMovies:Movie[]
  romanticMovies:Movie[]
  documentries:Movie[]
}

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  horrorMovies,
  comedyMovies,
  romanticMovies,
  documentries} : Props) => {

    const {loading,} =useAuth();
    const showModel=useRecoilValue(modalState);
    const subscription = false;
    if(loading || subscription === null) return null;
    if(!subscription) return <Plan products={products}/>
  
  return (
    <div className=" relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {/*Header*/}
     <Header/>
    <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
      {/*Banner*/}
      <Banner netflixOriginals={netflixOriginals}/>
      <section className=' md:space-y-24'>
        {/*Row*/}
        <Row title='Trending Now' movies={trendingNow}/>
        <Row title='Top Rated' movies={topRated}/>
        <Row title='Action Thrillers' movies={actionMovies}/>
        {/*My List Component*/}
        {/* {list.length > 0 && <Row title='My List' movies={list}/> } */}
        <Row title='Comedies' movies={comedyMovies}/>
        <Row title='Romantic Movies' movies={romanticMovies}/>
        <Row title='Scary Movies' movies={horrorMovies}/>
        <Row title='Documentries' movies={documentries}/>
        
      </section>
    </main>
    {/*Modal*/}
    {showModel && <Modal/>}
    </div>
  )
}

export default Home

export const getServerSideProps=async()=>{
  const [
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  horrorMovies,
  comedyMovies,
  romanticMovies,
  documentries
  ]= await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res)=>res.json()),
    fetch(requests.fetchTrending).then((res)=>res.json()),
    fetch(requests.fetchTopRated).then((res)=>res.json()),
    fetch(requests.fetchActionMovies).then((res)=>res.json()),
    fetch(requests.fetchHorrorMovies).then((res)=>res.json()),
    fetch(requests.fetchComedyMovies).then((res)=>res.json()),
    fetch(requests.fetchRomanceMovies).then((res)=>res.json()),
    fetch(requests.fetchDocumentaries).then((res)=>res.json()),
  
  ])
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanticMovies: romanticMovies.results,
      documentries: documentries.results,
      
    },
  }
}