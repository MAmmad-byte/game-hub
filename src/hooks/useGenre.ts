import genre from "../data/genre";
import useData from "./useData";


export  interface Genre {
    id: number;
    name: string;
    image_background:string
  }

const useGenres = ()=>( {data:genre, error:null, isLoading:false })
export default useGenres