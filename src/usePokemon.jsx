import { useEffect, useState } from "react";

const UsePokemon=(Url)=>{
    const [Pokemonlist,setPokemonList] = useState([]);
    const [currentIndex,setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const[error,setError] = useState(null)


    useEffect(()=>{
        const fetchPokemonData = async ()=>{
            try{
                const respose = await fetch(Url);
                const data = await respose.json();
                setPokemonList(data.results || []);
                setLoading(false)
            }catch(error){
                setError(error.message);
                setLoading(false)
            }
        }
        fetchPokemonData();
    },[Url])

    const goNext =()=>{
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + 1,
            Pokemonlist.length - 1))
    }

    const goPrevious =()=>{
        setCurrentIndex((prevIndex)=>
            Math.max(prevIndex - 1, 0)

        )
    }

    const selectPokemon =(index)=>{
      setCurrentIndex(index)
    }
    return{
        Pokemonlist,
        currentPokemon:Pokemonlist[currentIndex],
        currentIndex,
        loading,
        error,
        isFirst: currentIndex === 0,
        isLast: currentIndex === Pokemonlist.length - 1,
        goNext,
        goPrevious,
        selectPokemon,

    }
}

export default UsePokemon;