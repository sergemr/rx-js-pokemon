import React, { useEffect, useState, useMemo } from "react";
import "./Search.css";
import {   Pokemon, usePokemon } from "../../rxjs/store";
import { useObservableState } from "observable-hooks";

const Search = () => {
  const [searchString, setSearchstring] = useState("ba");
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const { pokemon$, selected$ }=usePokemon();


  useEffect(() => {
    filteredPokemonReq();
  }, []);


  const filteredPokemonReq = () => {
    const sub = pokemon$.subscribe(setPokemon);
    return () => sub.unsubscribe();
  };
  const toggleDisplay = (id: any) => {
    console.log("clicking", id);
    if (selected$.value.includes(id)) {
      selected$.next(selected$.value.filter((pid) => pid != id));
    } else {
      selected$.next([...selected$.value, id]);
    }

    console.log("selected", selected$);
  };

  const filteredPokemon = useMemo(() => {
    return pokemon.filter((p) =>
      p.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
    );
  }, [pokemon, searchString]);
  return (
    <div className="Main" data-testid="Main">
      Main Component
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "left",
        }}
      >
        <input
          type="text"
          defaultValue={searchString}
          onChange={(e) => setSearchstring(e.target.value)}
        ></input>
        <br />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "left",
        }}
      >
        <div id="divDisplay" className="divDisplay">
          {filteredPokemon.map((p) => {
            return (
              <div key={p.name}>
                <label className="container">
                  <strong> {p.name}</strong> - {p.power}
                  <input
                    type="checkbox"
                    checked={selected$.value.includes(p.id)}
                    onChange={(e) => toggleDisplay(p.id)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Search;
