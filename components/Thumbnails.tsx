import Image from "next/image"
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { Movie } from "../typings"

interface Props {
  movie:Movie
}
const Thumbnails = ({movie} : Props) => {
  
  const [showModel, setShowModal]=useRecoilState(modalState);
  const [showmovie, setShowMovie]=useRecoilState(movieState);

  return (
    <div 
    onClick={()=>{setShowModal(true)
      setShowMovie(movie)
      }}
    className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
      src={`https://image.tmdb.org/t/p/w500${
        movie.backdrop_path || movie.poster_path
      }`}
      alt='gg'
      width={500}
      height={500}
      className="rounded-sm object-cover md:rounded"
      />
      
  
    </div>
  )
}

export default Thumbnails