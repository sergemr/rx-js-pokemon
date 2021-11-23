import { BehaviorSubject  ,combineLatestWith,map } from "rxjs";

import {createContext, useContext} from 'react';

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  power?:number;
  selected?:boolean;
}
export const rawPokermon$ = new BehaviorSubject<Pokemon[]>([]);

export const pokemonWithPower$ = rawPokermon$.pipe(
  map(pokemon=> 
      pokemon.map(p=>(
        {
          ...p,
          power: p.attack+p.defense+p.hp+p.special_attack+p.special_defense+p.speed
        }
      ))
    )
)

export const selected$ = new BehaviorSubject<number[]>([]);

export const pokemon$ = pokemonWithPower$.pipe(
  combineLatestWith(selected$),
  map(([pokemon, selected])=> 
      pokemon.map(p=>(
        {
          ...p,
          selected: selected.includes(p.id)
        }
      ))
    )
)
export const deck$ = pokemon$.pipe(
  map(pokemon=> 
      pokemon.filter(p=> p.selected)
    )
)
fetch('/pokemon-simplified.json')
.then(res=>res.json())
.then(data=>rawPokermon$.next(data))

const PokemonContext = createContext({
  pokemon$: pokemon$,
  selected$: selected$,
  deck$: deck$,
});


//custom hook
export const usePokemon = () => useContext(PokemonContext);


export const PokemonProvider : React.FC = ({children})=>{
return  <PokemonContext.Provider value={{
  pokemon$,
  selected$,
  deck$
}}>
  {children}
  </PokemonContext.Provider>
}