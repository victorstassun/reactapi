import React from 'react';
import { Navbar, Navigate, ContentGrid, DirectoriesGrid, ContentContainer } from './styles';
import { Search } from '../Menu/styles';

const Repositories: React.FC = () => {
    return (
        <>
        <Navbar>
            <Navigate>
                <a href="/">Home</a>
                <a href="repositories">Repositórios</a>
            </Navigate>
            <Search placeholder="Insira o CNPJ desejado!" />
        </Navbar>
        <ContentGrid>
            <DirectoriesGrid>
                <ContentContainer></ContentContainer>
                <ContentContainer></ContentContainer>
                <ContentContainer></ContentContainer>
                <ContentContainer></ContentContainer>
                <ContentContainer></ContentContainer>
                <ContentContainer></ContentContainer>
                <ContentContainer></ContentContainer>
                <ContentContainer></ContentContainer>
                <ContentContainer></ContentContainer>
                <ContentContainer></ContentContainer>
                <ContentContainer></ContentContainer>
                <ContentContainer></ContentContainer>
            </DirectoriesGrid>
        </ContentGrid>
        </>
    );
};

export default Repositories;