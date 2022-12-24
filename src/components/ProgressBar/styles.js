import styled from "styled-components";

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 45px;
    background-color: #DBE3E5;
`

export const ProgressBarFiller = styled.div`
    background-color: #80C0D3;
    height: 100%;
    width: ${props => props.percentage}%;
`;