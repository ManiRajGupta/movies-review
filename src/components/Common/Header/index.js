import React from 'react';
import { Link } from 'react-router-dom';

//Images
import DatabaseLogo from '../../../images/Database-logo.svg';
import MainLogo from '../../../images/Main-logo.svg';

//Styles import
import { Wrapper, Content, MainLogoImg, DatabaseLogoImg, MainName } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <MainLogoImg src={MainLogo} alt="tmdb-logo" />
      </Link>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <MainName>Movies Review</MainName>
      </Link>
      <p className='Login'>
        <a href="http://localhost:3001">Login</a>
      </p>
      <p className='Login signup'>
        <a href="http://localhost:3001">Sign up</a>
      </p>
      <DatabaseLogoImg src={DatabaseLogo} alt="rmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
