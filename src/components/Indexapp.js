import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Indexapp = () => {
    const [pokemons, setPokemons] = useState([])
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        console.log("entro onSubmitHandler ")
        //const fetchData = async () => {
        try {
            //const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1118')
            // console.log(data)
            // setPokemons({ ...data.results })     //se tiene que crear un objeto nuevo para detectar cambios deestado 
            // console.log("********* pokemons *******")
            // console.log(pokemons)
            // console.log(pokemons.length)


            const { data: { results } } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1118')
            console.log(results)
            setPokemons(results)     //se tiene que crear un objeto nuevo para detectar cambios deestado 
            console.log("********* pokemons *******")
            console.log(pokemons)

        }
        catch (error) {
            console.log(error)
        }
        // }
        //fetchData()
    }


    return (
        <div>
            <input type="submit" value="APP pokemos Api" onClick={onSubmitHandler} />

            {/* <div>
                {pokemons.map(({ name }, key) =>
                    <p key={key}> {name}</p>
                )}            }
            </div> */}
            {/* <div>
                {pokemons.length > 0 && pokemons.map(({ name }, key) =>
                    <p key={key}> {name}</p>
                )}
            </div> */}
            {/* <div>
                {pokemons.map((pokemon, key) => (
                    <p key={key}> {pokemon}</p>
                ))}
            </div> */}
            {/* <div>
                {pokemons.length > 0 && pokemons.map((results, key) => (
                    <p key={key}>{results.name}</p>
                ))}
            </div> */}
            {pokemons.map(({ name }, key) => (
                <p key={key}>{name}</p>
            ))}
        </div>
    )
}
export default Indexapp