import styled from '@emotion/styled';
import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IconMenu2, IconX } from '@tabler/icons';
import LogoGochie from '../../Asset/logoGochie.svg';
import ChangLanguage from 'app/components/ChangeLanguageBtn';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useUserSlice } from 'store/app/user/slice';

export function HomePage() {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [sideBarMobile, setSideBarMobile] = useState(false);
  const dispatch = useDispatch();
  const { actions } = useUserSlice();

  const navigate = useNavigate();
  window.addEventListener('resize', function () {
    if (window.screen.width < 768) {
      setToggleSidebar(false);
    } else {
      setToggleSidebar(true);
    }
  });
  const handleLogout = () => {
    localStorage.removeItem('users');
    navigate('/login');
    window.location.reload();
  };
  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>

      <Contain>
        <ContainHeader>
          <Bars onClick={() => setSideBarMobile(true)}>
            <IconMenu2></IconMenu2>
          </Bars>
          <ChangLanguage />
          <img src={LogoGochie} alt="logo" />
        </ContainHeader>
        <ContainContent>
          {toggleSidebar ? (
            <>
              <SideBar>
                <Menu>menu1</Menu>
                <Menu>menu2</Menu>
                <Menu>menu3</Menu>
                <Menu>menu4</Menu>
                <Button onClick={() => handleLogout()}>Logout</Button>
              </SideBar>
              <Content>
                <p>1</p>
              </Content>
            </>
          ) : sideBarMobile ? (
            <>
              <SideBar>
                <div onClick={() => setSideBarMobile(false)}>
                  <IconX />
                </div>
                <Menu>menu1</Menu>
                <Menu>menu2</Menu>
                <Menu>menu3</Menu>
                <Menu>menu4</Menu>
              </SideBar>
            </>
          ) : (
            <></>
          )}
        </ContainContent>
      </Contain>
      <Footer>@Web advance</Footer>
    </>
  );
}
const ContainHeader = styled.div`
  width: 100%;
  height: 10vh;
  padding: 15px;
  background-color: #f7f2f2;
  display: flex;
  justify-content: end;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const Contain = styled.div`
  width: 100%;
  height: 95vh;
`;
const ContainContent = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
`;
const SideBar = styled.div`
  width: 15%;
  background-color: aliceblue;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    height: 95vh;
    width: 100%;
  }
`;
const Content = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Menu = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  cursor: pointer;
  &:hover {
    background-color: #d1d7db;
  }
  @media (max-width: 768px) {
    width: 60vw;
  }
`;
const Footer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;
`;
const Bars = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
