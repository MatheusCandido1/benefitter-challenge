import styled from "styled-components";

export const TaskContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CloseButton = styled.button`
    color: #269FC3;
    border: none;
    outline: none;
    background-color: transparent;
`;

export const TaskTitle = styled.p`
    text-decoration: ${props => props.isCompleted ? "line-through" : "none"};
`;