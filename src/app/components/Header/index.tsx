import styled from '@emotion/styled';
import { ActionIcon } from '@mantine/core';

import React from 'react';
import LogoGochie from '../../Asset/logoGochie.svg';
const Header = () => {
  return (
    <>
      <Contain>
        <Bars>a</Bars>
        <img src={LogoGochie} alt="logo" />
      </Contain>
    </>
  );
};
const Contain = styled.div`
  width: 100%;
  height: 10vh;
  padding: 15px;
  background-color: #eaeaea;
  display: flex;
  justify-content: end;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const Bars = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
export default Header;
