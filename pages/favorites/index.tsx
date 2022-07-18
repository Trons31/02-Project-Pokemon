// Para las buenas practicas de NEXT JS debemos colocar primero las importaciones de React luego los terceros, y luego nuestros componentes o utilidades


import { useEffect, useState } from 'react';

import { Card, Grid } from '@nextui-org/react';

import { NoFavorites } from '../../components/ui';
import { Layout } from '../../components/layouts';
import { localFavorites } from '../../utils';
import { FavoritesPoke } from '../../components/pokemon';


const FavoritesPage = () => {
                                            
  const [FovoritesPok, setFovoritesPok] = useState<number[]>([]); // El use useState() es nuestro valor inicial 

  useEffect(() => {
  
    setFovoritesPok( localFavorites.FavoritosExist() );

  }, [])
  

  return (
      <Layout title='Pokémons - Favoritos'>
        
        {
          FovoritesPok.length === 0 // Esto es una condicion con una estructura muy distinta que nos proporciona REACT en esta line de codigo se encuentra la condicion
          ? ( <NoFavorites /> )     // La interrgante que cierra significa si esta condicion se cumple, y ejecuta lo que se encuentra dentro de los parentesis
          : (                       // Los dos puntos significa que esta condicion no se cumple y ejecuta lo que esta dentro de los parentesis
        
            <FavoritesPoke pokemon={ FovoritesPok } />

           )
        }


       
        

      </Layout>
  )
};

export default FavoritesPage;
