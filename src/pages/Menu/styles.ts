import styled from 'styled-components';

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
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eF0Ut1JeR4K1pwmyVMTI69LOlNA4JAQOUw&usqp=CAU');
    background-size: no-repeat, repeat;
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
    text-shadow: rgba(255, 255, 255, 0.1) 0.8vh 1.4vh;
    animation: 0.2s;
    
    h1{ 
        font-weight: bolder;
        font-size: 8vh;

        &:hover {
            font-size: 10vh;
        }
    }

`;

export const Desc = styled.div`
    width: 100%;
    height: 8vh;
    float: left;
    display: flex;
    justify-content: center;
    text-shadow: rgba(255, 255, 255, 0.1) 0.8vh 1.4vh;
    
    h2 {
        color: #c4c4c4;
        font-weight: 100;
        font-size: 2.5vh;

        &:hover {
            font-size: 2.75vh;
        }
    }
`;

export const ContainerSearch = styled.div`
    width: 100%;
    heigth: 50vh;
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

    input {
        width: 24vw;
        height: 8vh;
        font-size: 2vh;
        border-radius: 4vh;
        background: rgba(255, 255, 255, 0.65);
        border: 0.2vh solid black;
        display: flex;
        text-align: center;
        color: black;
    }
`;