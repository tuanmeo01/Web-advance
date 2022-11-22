import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DefaultPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <>
      <Contain>
        <LoginBtn onClick={() => handleLogin()}>Login</LoginBtn>
      </Contain>
    </>
  );
};
const LoginBtn = styled.div`
  background-color: #6e193a;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #773750;
  }
`;
const Contain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default DefaultPage;
