import styled from "styled-components";

export const MainContainer = styled.main`
    width: 320px;
    background-color: #FFF;
    height: 513px;
    border-radius: 24px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
    padding-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 17px 17px 17px;
`;

export const MainBody = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    align-items: center;
`;

export const MainTitle = styled.h1``;

export const MainSection = styled.section`
    width: 100%;
    margin-top: 21px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #979797;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #979797;
        height: 45px;
    }
`;