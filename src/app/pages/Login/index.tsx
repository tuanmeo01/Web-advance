import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import LogoGochie from '../../Asset/logoGochie.svg';
import { PasswordInput, Input } from '@mantine/core';
import ChangLanguage from 'app/components/ChangeLanguageBtn';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/app/user/slice/selector';
import { useUserSlice } from 'store/app/user/slice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  var username: string;
  var password: string;
  const dispatch = useDispatch();
  const { actions } = useUserSlice();
  const user = useSelector(selectUser);
  const handleGetUsername = event => {
    username = event.target.value;
  };
  const handleGetPassword = event => {
    password = event.target.value;
  };
  const handleSubmit = () => {
    dispatch(
      actions.login({
        username,
        password,
      }),
    );
  };

  React.useEffect(() => {
    if (user) {
      navigate('/homepage');
    }
  }, [navigate, user]);

  const { t } = useTranslation();
  return user ? (
    <div></div>
  ) : (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Contain>
        <ContainLogin>
          <BtnChangeLanguage>
            <ChangLanguage />
          </BtnChangeLanguage>
          <LogoGochiee>
            <img src={LogoGochie} alt="logo gochie" />
          </LogoGochiee>
          <ContainInput>
            <Input.Wrapper label={t('Login.username')} required>
              <Input
                placeholder={t('Login.PlayholdeUsername')}
                size="md"
                radius="md"
                onChange={handleGetUsername}
              />
            </Input.Wrapper>
            <div style={{ margin: '50px' }}> </div>
            <PasswordInput
              label={t('Login.password')}
              onChange={handleGetPassword}
              placeholder={t('Login.PlayholdePassword')}
              size="md"
              radius="md"
              withAsterisk
            />
          </ContainInput>
          <Button onClick={() => handleSubmit()}>Login</Button>
        </ContainLogin>
      </Contain>
    </>
  );
};
export default Login;
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
    padding: 50px 5px;
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
const BtnChangeLanguage = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: -40px;
  margin-right: -130px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;
