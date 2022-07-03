import React from 'react';
import styled from 'styled-components';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ValidInput from './ValidInput';
import AwsomeInput from './AwsomeInput';

const App = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Routes>
        <Route path='/' element={<AwsomeInput />}/>
        <Route path='/valid' element={<ValidInput />}/>
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  gap: 30px;
  background: #1d2b3a;
`

