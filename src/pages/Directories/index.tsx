import React, { FormEvent, useState } from 'react';
import { Navbar, Navigate, ContentGrid, DirectoriesGrid, ContentContainer
    , Form, Info, PokeTypes, Error } from './styles';
import { Search } from '../Menu/styles';
import api from '../../services/api';
import { Colors } from './colors';

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
    const [inputError, setInputError] = useState('');

    async function handleAddPokemons(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (!newPoke) {
            setInputError('Informe um pokemón para a pesquisa!')
            return;
        }

        try {

        const response = await api.get<Pokemons>(`pokemon/${newPoke}`);
        const pokemon = response.data;

        console.log(pokemon.sprites['front_default']);
        setPokemons([pokemon]);
        setTypes(pokemon.types);

        } catch(err) {
            setInputError('Pokemón não encontrado ou não existe!')
        }
    }

    function setTypeColor(type: Types) {
        for (var i = 0; i < Colors.length; i ++) {
          if (type.type.name.toUpperCase() === Colors[i].name) {
            return <div style={{background: Colors[i].color}}>{type.type.name}</div>;
          }
        };
      }

    return (
        <>
        <Navbar>
            <Navigate>
                <a href="/">Home</a>
                <a href="repositories">Pokemóns</a>
            </Navigate>
            <Form hasError={Boolean(inputError)} onSubmit={handleAddPokemons}>
                <Search value={newPoke} onChange={e => setNewPoke(e.target.value)} placeholder="Digite o nome do seu Pokemón!" />
                <button type="submit" />
            </Form>
            {inputError && <Error>{inputError}</Error>}
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
                            <PokeTypes>
                                {pokemon.types.map(type => (
                                    setTypeColor(type)
                                ))}
                            </PokeTypes>
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