import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const AwsomeInput = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={() => navigate('/valid')}>Go ValidInput</Button>
      <InputContainer>
        <input type="text" required/>
        <span>First Name</span>
      </InputContainer>
      <InputContainer>
        <input type="text" required/>
        <span>Last Name</span>
      </InputContainer>
    </Container>
  )
}

export default AwsomeInput;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  gap: 30px;
  background: #1d2b3a;
`

const InputContainer = styled.div`
  position: relative;
  width: 250px;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background-color: transparent;
    border-radius: 5px;
    outline: none;
    color: #fff;
    font-size: 1em;
    transition: .3s;
  }

  span {
    position: absolute;
    left: 0;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    color: rgba(255, 255, 255, .25);
    text-transform: uppercase;
    transition: .3s;
  }
  input:valid,
  input:focus {
    border-color: #00dfc4;
  }

  input:valid ~ span,
  input:focus ~ span {
    color: #00dfc4;
    transform: translateX(10px) translateY(-7px);
    font-size: .65rem;
    padding: 0 10px;
    background: #1d2b3a;
    border-right: 1px solid #00dfc4;
    border-left: 1px solid #00dfc4;
    letter-spacing: .2em;
  }

  &:nth-child(2) input:valid ~ span,
  &:nth-child(2) input:focus ~ span {
    background-color: #00dfc4;
    color: #1d2b3a;
    border-radius: 2px;
  }
`

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: .5rem 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  box-shadow: 5px 5px 10px #fff;
`