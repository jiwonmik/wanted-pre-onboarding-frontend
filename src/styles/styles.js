import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
export const HomeBtn = styled.button`
  margin: 30px 30px 0px 0px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 90px;  
  font-size: 18px;
  box-sizing: border-box;
  float: right;
  &:hover{
    background-color: aliceblue;
  }
`

export const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

export const AuthForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  border-radius: 16px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    place-items: center;
    flex-direction: column;
`;

export const Btn = styled.button`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;  
  font-size: 18px;
  box-sizing: border-box;
  &:hover{
    background-color: aliceblue;
  }
`





