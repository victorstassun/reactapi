import React from 'react';
import { Intro, Navigate, Banner, Navbar, Search, Tittle, Desc
    , ContainerSearch, SignedsCNPJ, CNPJSearcher } from './styles';

const Menu: React.FC = () => {
    return (
        <>
        <Banner>
            <Navbar>
                <Navigate>
                    <a href="/">Home</a>
                    <a href="repositories">Repositórios</a>
                </Navigate>
                <Search placeholder="Insira o CNPJ desejado!" />
            </Navbar>
            <Intro>
                <Tittle><h1>CNPJ Tracker</h1></Tittle>
                <Desc><h2>API para pesquisa de CNPJ´S!</h2></Desc>
            </Intro>
        </Banner>
        <ContainerSearch>
            <SignedsCNPJ>
                <h1>48,984,820</h1>
                <h3>CNPJ´S Cadastrados!</h3>
            </SignedsCNPJ>
            <CNPJSearcher>
                <input placeholder="Consulte!"></input>
            </CNPJSearcher>
        </ContainerSearch>
        </>
    );
};

export default Menu;