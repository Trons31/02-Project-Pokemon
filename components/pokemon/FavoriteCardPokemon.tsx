import { Card, Grid } from "@nextui-org/react"
import { FC } from "react"
import { useRouter } from 'next/router';


interface Props {
    pokemonId: number;
}


export const FavoriteCardPokemon : FC<Props> = ({ pokemonId }) => {

  const router = useRouter(); //El router nos srive para direccionar haci una pagina
 

  const OnTogglePokemon = () => {
    
    router.push(`/pokemon/${pokemonId}`)  // Cuando utilizamos la funcion push que viene del router, podemos direccionar hacia otra pagina y con los bastics podemos enviar un valor dinamico a una pagina dinamica

  }
  
  return (
   
        <Grid xs={6} sm={ 3 }  md={ 2 } xl={1} key={pokemonId} onClick={ OnTogglePokemon }  >
         <Card hoverable clickable css={{ padding: 10 }}  >
         <Card.Image
           src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
           width={'100%'}
           height={140}
         />
         </Card>
        </Grid>
      
  )
}
