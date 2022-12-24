import styled from "styled-components";

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 45px;
    background-color: #DBE3E5;
    border: none !important;
    position: relative;

    p {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 45px;
        position: absolute;

        strong {
            color: #003A40;
            font-weight: 700;
        }
    }
`

export const ProgressBarFiller = styled.div`
    background-color: #80C0D3;
    height: 100%;
    width: ${props => props.fill}%;
    border: none !important;
`;