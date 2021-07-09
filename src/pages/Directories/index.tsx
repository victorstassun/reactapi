import React, { FormEvent, useState } from 'react';
import { Navbar, Navigate, ContentGrid, DirectoriesGrid, ContentContainer
    , Form, Info } from './styles';
import { Search } from '../Menu/styles';
import api from '../../services/api';

interface Pokemons {
    name: string;
    sprites: {
        'front_default': string;
    }
    types: Types[];
}

interface Types {
    type: {
        name: string;
    }
}

const Repositories: React.FC = () => {

    const [newPoke, setNewPoke] = useState('');
    const [pokemons, setPokemons] = useState<Pokemons[]>([]);
    const [pokemonsStatic, setPokemonsStatic] = useState<Pokemons[]>([]);
    const [types, setTypes] = useState<Types[]>([]);

    async function handleAddPokemons(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        const response = await api.get<Pokemons>(`pokemon/${newPoke}`);
        const pokemon = response.data;

        console.log(pokemon.sprites['front_default']);
        setPokemons([pokemon]);
        setTypes(pokemon.types);
    }

    return (
        <>
        <Navbar>
            <Navigate>
                <a href="/">Home</a>
                <a href="repositories">Pokemóns</a>
            </Navigate>
            <Form onSubmit={handleAddPokemons}>
                <Search value={newPoke} onChange={e => setNewPoke(e.target.value)} placeholder="Digite o nome do seu Pokemón!" required />
                <button type="submit" />
            </Form>
        </Navbar>
        <ContentGrid>
            <DirectoriesGrid>
            {pokemons.length > 0 ? 
            pokemons.map(pokemon => (
                <ContentContainer>
                    <>
                        <img src={pokemon.sprites['front_default']}></img>
                        <Info>
                            <p>Nome: <a>{pokemon.name}</a></p>
                            <p>Tipo: <a>{pokemon.types[0].type.name} / {pokemon.types[1]?.type.name}</a></p>
                        </Info>
                    </>
                </ContentContainer>
            )) :
                <ContentContainer>
                    <>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"></img>
                        <Info>
                            <p>Nome: <a>bulbasaur</a></p>
                            <p>Tipo: <a>grass / poison</a></p>
                        </Info>
                    </>
                </ContentContainer>
            }  
            </DirectoriesGrid>
        </ContentGrid>
        </>
    );
};

export default Repositories;