import React from 'react';
import { Link } from 'react-router-dom';
import { LogoImage, MenuWrapper } from './style';
import Button from '../Button';
import Logo from '../../assets/logo.png';
//import './Menu.css';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <a to="/">
        <LogoImage className="Logo" src={Logo} alt="AluraFlix logo" />
      </a>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;