import styled from 'styled-components';
import BannerImage from '../../assets/Banner.png';
import Lupa from '../../assets/lupa.svg';

export const Search = styled.input`
    float: right;
    width: 20vw;
    height: 4vh;
    border: 0.1vh solid white;
    border-radius: 10vh;
    background: transparent;
    margin: 2vh 0 0 20vw;
    padding: 2vh;

    &::placeholder {
        font-size: 2vh;
    }
`;

export const Navigate = styled.div`
    width: 40vw;
    height: 8vh;
    margin-left: 10vw;
    display: flex;
    flex-direction: row;

    a {
        position: absolute;
        font-size: 2.5vh;
        color: white;
        text-decoration: none;
        margin: 3vh 4vw 0 0;
        display: flex;
        flex-direction: row;
        justify-content: center;

            &:last-child {
                margin-left: 7vw;
            }

            &:first-child:after {
                content: "";
                width: 6vw;
                height: 0.4vh;
                border-radius: 0.4vh 0.4vh 0 0;
                margin-top: 4.525vh;
                background: white;
                position: absolute;
            }

            &:hover {
                font-size: 2.75vh;
            }
    }


    }
`;

export const Banner = styled.div`
    width: 100%;
    height: 50vh;
    background-image: url(${BannerImage});
    background-size: cover;
`;

export const Navbar = styled.nav`
    width: 100%;
    height: 8vh;
    display: flex;
    background: rgba(51, 51, 51, 0.4);
`;

export const Intro = styled.div`
    width: 100vw;
    height: 42vh;
    display: flex;
    flex-direction: oolumn;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Tittle = styled.div`
    width: 100%;
    height: 12vh;
    float: left;
    display: flex;
    justify-content: center;
    margin-top: 8vh;
    text-shadow: rgba(255, 255, 255, 0.3) 0.8vh 1.4vh;
    
    h1{ 
        font-weight: bolder;
        font-size: 8vh;
    }

`;

export const Form = styled.form`
    a {
        background: transparent;
        border: none !important;
        background-image: url('${Lupa}');
        background-size: cover;
        width: 3vh;
        height: 3vh;
        position: absolute;
        margin: 2.5vh 0 0 38vw;
    }
`;

export const Desc = styled.div`
    width: 100%;
    height: 8vh;
    float: left;
    display: flex;
    justify-content: center;
    text-shadow: rgba(255, 255, 255, 0.15) 0.8vh 1.4vh;
    
    h2 {
        color: #c4c4c4;
        font-weight: 100;
        font-size: 2.5vh;
    }
`;

export const ContainerSearch = styled.div`
    width: 100%;
    heigth: 45vh;
    display: flex;
    flex-direction: column;

    h1 {
        color: black;
    }
`;

export const SignedsCNPJ = styled.div`
    width: 100%;
    heigth: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 8vh;

    h1 {
        font-size: 5vh;
        display: flex;
        justify-content: center;
        color: #000000;
    }

    h3 {
        font-size: 2vh;
        display: flex;
        justify-content: center;
        color: #4e4e4e;
    }
`;


export const CNPJSearcher = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 4vh;

    a {
        width: 12vh;
        height: 12vh;
        font-size: 2vh;
        border-radius: 6vh;
        background-image: linear-gradient( to bottom, red 45%, grey 45%, grey 55%, white 55%);
        border: 0.2vh solid black;
        display: flex;
        text-align: center;
        color: black;
        justify-content: center;
        text-decoration: none;

        h2 {
            color: #000000;
            font-size: 1.4em;
            margin-top: 4vh;
            font-weight: bolder;
        }

        &:hover {
            width: 14vh;
            height: 14vh;
            border-radius: 7vh;

            h2 {
                font-size: 1.8em;
                margin-top: 4.8vh;
            }
        }
    }
`;

export const PokeLine = styled.div`
    width: 100%;
    height: 5vh;
    background-color: rgb(101, 101, 101);
    display: flex;
    justify-content: center;
`;

export const Circle = styled.div`
    width: 8vh;
    height: 8vh;
    border-radius: 4vh;
    background-color: rgb(255, 255, 255);
    margin-top: -2vh;
    box-shadow: 0 0 0 2vh rgb(101, 101, 101);

    &:hover {
        width: 10vh;
        height: 10vh;
        border-radius: 5vh;
        margin-top: -3vh;
    }
`;

