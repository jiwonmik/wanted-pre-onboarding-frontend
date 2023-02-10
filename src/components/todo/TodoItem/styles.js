import styled, { css } from "styled-components";

export const Btn = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #dee2e6;
font-size: 24px;
cursor: pointer;
&:hover {
  color: #ff6b6b;
}
`;
export const TodoItemBlock = styled.li`
display: flex;
align-items: center;
padding-top: 12px;
padding-bottom: 12px;
&:hover {
  ${Btn} {
    display: initial;
  }
}
`;
export const CheckCircle = styled.div`
width: 32px;
height: 32px;
border-radius: 16px;
border: 1px solid #ced4da;
font-size: 24px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
${props =>
  props.done &&
  css`
    border: 1px solid #38d9a9;
    color: #38d9a9;
  `}
`;
export const Text = styled.div`
flex: 1;
font-size: 21px;
color: #495057;
${props =>
  props.done &&
  css`
    color: #ced4da;
  `}
`;
export const EditInput = styled.div`
padding: 12px;
border-radius: 4px;
border: 1px solid #dee2e6;
width: 100%;
outline: none;
font-size: 18px;
box-sizing: border-box;
`;