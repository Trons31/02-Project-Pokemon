



const toggleFavorites = ( id:number ) => {

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]'  );


    if( favorites.includes(id) ){
        favorites = favorites.filter(pokeId => pokeId !== id)
    } else{
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

}



const existInFavorites = ( id:number ): boolean => {
    //Cuando la aplicacion reviente con errores 500 o del lado del servidor es porque tenemos codigo que nuestro back-end no esta renderizando 

    if( typeof window === 'undefined' ) return false; // si esta se esta generando del lado del servidor devolveremos false; 


    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]'  );

    return favorites.includes(id);

}


const FavoritosExist = (): number[] => {

    return JSON.parse( localStorage.getItem('favorites') || '[]' );

}


export default {
    toggleFavorites,
    existInFavorites,
    FavoritosExist,
}