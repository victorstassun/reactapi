import React from 'react';
import { Intro, Navigate, Banner, Navbar, Search, Tittle, Desc
    , ContainerSearch, SignedsCNPJ, CNPJSearcher, PokeLine, Circle,
    Form } from './styles';

const Menu: React.FC = () => {
    return (
        <>
        <Banner>
            <Navbar>
                <Navigate>
                    <a href="/">Home</a>
                    <a href="repositories">Buscar</a>
                </Navigate>
            </Navbar>
            <Intro>
                <Tittle><h1>PokeSearcher</h1></Tittle>
                <Desc><h2>Sua pokedéx on-line e gratuita!</h2></Desc>
            </Intro>
        </Banner>
        <PokeLine>
            <Circle></Circle>
        </PokeLine>
        <ContainerSearch>
            <SignedsCNPJ>
                <h1>Clique na PokeBola abaixo para buscar...</h1>
                <h3>São mais de 1000 pokemóns cadastrados!</h3>
            </SignedsCNPJ>
            <CNPJSearcher>
                <a href="repositories"><h2>.</h2></a>
            </CNPJSearcher>
        </ContainerSearch>
        </>
    );
};

export default Menu;