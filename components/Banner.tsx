import Image from "next/image"
import { Movie } from "../typings"
import { useState,useEffect } from 'react'
import { baseUrl } from "../constant/movie"
import {FaPlay} from "react-icons/fa"
import {HiOutlineInformationCircle} from "react-icons/hi"


interface Props {
  netflixOriginals:Movie[]
}
const Banner = ({netflixOriginals} : Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);


  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])
  
console.log(movie)
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image 
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} width={1800} height={950}
         alt='img' 
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-shadow-md">
        {movie?.name || movie?.title || movie?.overview}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl"> 
        {movie?.overview}
      </p>
      <div className="flex space-x-2">
        <button type="button" className="bannerButton bg-white text-black"><FaPlay className="w-4 h-4 text-black md:w-7 md:h-7"/>Play</button>
        <button type="button" className="bannerButton bg-[gray]/70">More Info <HiOutlineInformationCircle className="h-5 w-5 md:h-8 md:w-8"/></button>
      </div>
    </div>
  )
} 

export default Banner