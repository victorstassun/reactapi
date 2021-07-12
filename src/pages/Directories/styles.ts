import styled from 'styled-components';
import ultra from '../../assets/ultra.svg';
import PokeBack from '../../assets/BackgroundPoke.png';
import Search from '../../assets/lupa.svg';


export const Navbar = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    background: rgb(51, 51, 51);
`;

export const Form = styled.form`
    button {
        background: transparent;
        border: none !important;
        background-image: url('${Search}');
        background-size: cover;
        width: 3vh;
        height: 3vh;
        position: absolute;
        margin: 2.5vh 0 0 38vw;
        text-transform: lowercase;
    }
`;

export const ContentGrid = styled.div`
    width: 100vw;
    height: 92vh;
    display: flex;
    justify-content: center;
    background-image: url(${PokeBack});
`;

export const Info = styled.div`
    width: 80%;
    height: 12vh;
    display: flex;
    flex-direction: column;
    align-itens: center;

    p {
        font-size: 2vh;
        padding-bottom: 0.5vh;
        font-weight: bold;

        &:first-child {
            margin-top: 3.5vh;
        }
    }

    a {
        color: rgb(51, 51, 51);
        font-weight: 200;
    }

`;

export const ContentContainer = styled.div`
    width: 40%;
    margin: 0 5% 1.6vh 0;
    height: 12vh;
    background: rgb(235, 235, 235, 0.5);
    border-radius: 1vh;
    animation: transform 0.2s;
    display: flex;
    flex-direction: row;

    p {
        font-size: 2vh;
        color: #000000;
    }
    img {
        width: 14vh;
        height: 14vh;
    }

    &:hover {
        background: rgb(235, 235, 235, 0.8);
        transform: translateX(1vw);
    }

    &:after {
        content: '';
        background-image: url(${ultra});
        background-size: cover;
        width: 4vh;
        height: 4vh;
        position: absolute;
        margin: 4vh 0 0 23vw;;
    }
`;

export const DirectoriesGrid = styled.div`
    width: 60vw;
    height: 80vh;
    margin-top: 6vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
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
            
            &:last-child:after {
                content: "";
                width: 9vw;
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