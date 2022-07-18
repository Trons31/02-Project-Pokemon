import { FC } from "react"

import { Card, Grid } from "@nextui-org/react"
import { FavoriteCardPokemon } from "./";


interface Props { //Como este Funtional Component recibira un arreglo debemos crear la interface que le proporcionara las Props a nuestro FC 
    pokemon : number[];
}

export const FavoritesPoke: FC<Props> = ({ pokemon }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start' >
    {
       pokemon.map( id => (
            <FavoriteCardPokemon key={id} pokemonId={ id } />
        ) )
    }
   </Grid.Container>
  )
}
