import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";


 
export const PokeGetStatic = async(nameOrId: string) => {

    try { // para controlar nuestras ecepciones utilizamos el TRYCACHT y podremos manejar del lado del servidor lo que desamos mostrar si ocurre un error.

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    return{
      id : data.id,
      name: data.name,
      sprites: data.sprites

    }
      
    } catch (error) {
       return null;
    }

}
