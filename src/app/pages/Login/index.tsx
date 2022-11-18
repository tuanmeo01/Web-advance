import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import { useState, useRef } from 'react';
import LogoGochie from '../../Asset/logoGochie.svg';
import { Autocomplete, PasswordInput, Input } from '@mantine/core';
const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Contain>
        <ContainLogin>
          <LogoGochiee>
            <img src={LogoGochie} alt="logo gochie" />
          </LogoGochiee>
          <ContainInput>
            <Input.Wrapper label="Username" required>
              <Input placeholder="Username" size="md" radius="md" />
            </Input.Wrapper>
            <div style={{ margin: '50px' }}> </div>
            <PasswordInput
              placeholder="Password"
              label="Password"
              size="md"
              radius="md"
              withAsterisk
            />
          </ContainInput>
          <Button>Login</Button>
        </ContainLogin>
      </Contain>
    </>
  );
};

const Contain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 60px 100px;
  align-items: center;
  @media (max-width: 768px) {
    padding: 30px 30px;
  }
`;
const ContainLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 570px;
  height: 100%;
  border-radius: 10px;
  background-color: aliceblue;
  padding: 50px 80px;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
const LogoGochiee = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;
const ContainInput = styled.div`
  width: 100%;
  margin-bottom: 200px;
  @media (max-width: 768px) {
    margin-bottom: 80px;
    width: 70vw;
  }
`;
const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  background-color: #e14486;
  &:hover {
    background-color: #9b2259;
  }
  &:active {
    background-color: #e14486;
  }
  @media (max-width: 768px) {
    height: 35px;
    width: 150px;
  }
`;
export default Login;
