import { GameQuary } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";


export  interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms: {platform:Platform}[];
    metacritic:number;
    rating_top:number
  }
  export interface Platform{
    id:number;
    name:string;
    slug:string
  }
const useGames = (gameQuary:GameQuary | null)=>useData<Game>("/games", {params:{genres: gameQuary?.genre?.id, parent_platforms: gameQuary?.platform?.id, order:gameQuary?.sortOrder, search:gameQuary?.searchText}}, [gameQuary])
export default useGames