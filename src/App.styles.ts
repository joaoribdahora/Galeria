import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background-color: #27282F;
    color: #FFF;

`;
export const Body = styled.main`
    max-width: 980px;
    margin: auto;
`;

export const Header = styled.header`
    width: 100%;
    font-weight: bold;
    font-size: 40px;
    margin: auto;
    display: flex;
    justify-content: center;
    padding: 15px;
`;



export const AddPhoto = styled.section`
    width: 100%;
    padding: 25px;
    margin: 20px 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;

    input[type=submit] {
        margin: 0 20px;
        border: 0;
        padding: 8px 16px;
        border-radius: 10px;
        background-color: #756DF4;
        color: #FFF;
        cursor: pointer;
        transition: all ease 0.4s;

        &:hover {opacity: 0.8;}
    }

    input[type=text] {
        margin: 0 20px;
    }

`;

export const Gallery = styled.section`
    width: 100%;
    display: grid;
    margin: 30px 20px;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

`;

export const Warning = styled.section`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;
