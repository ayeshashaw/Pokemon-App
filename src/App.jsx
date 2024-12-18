import UsePokemon from "./usePokemon"


const App =()=>{

  const Url = "https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-12-17/data_153140.plain"

  const {
    pokemonList,
    currentPokemon,
    currentIndex,
    loading,
    error,
    isFirst,
    isLast,
    goNext,
    goPrevious,
    selectPokemon,
  } = UsePokemon(Url)

  if(loading) return <p>loading...</p>
  if(error) return <p>error...</p>

  return (
    <div style={style.container}>
      <h1>Pokemon-Page</h1>

      <select value={currentIndex}
       onChange={(e) =>
        selectPokemon(Number(e.target.value))}>
        {pokemonList.map((pokemon,index)=>(
        <option key={pokemon.name} value={index}>{pokemon.name}</option>
       ))}
       </select>

       <div style={style.card}>
        <h2>{currentPokemon.name.toUpperCase()}</h2>
        <p>
          Id: {currentIndex + 1}
        </p>
       </div>

       <div>
        <button onClick={goPrevious} disabled={isFirst}>Previous</button>
        <button onClick={goNext} disabled={isLast}> Next</button>

       </div>


       
    </div>
  )
}

export default App;