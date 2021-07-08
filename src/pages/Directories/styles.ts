import styled from 'styled-components';

export const Navbar = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    background: rgb(51, 51, 51);
`;

export const ContentGrid = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    width: 40%;
    margin: 0 5% 1.6vh 0;
    height: 12vh;
    background: grey;
    border-radius: 1vh;
    animation: transform 0.2s;

    &:hover {
        opacity: 0.5;
        transform: translateX(1vw);
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