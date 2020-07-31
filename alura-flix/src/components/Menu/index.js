import React from 'react';
import { Link } from 'react-router-dom';
import { LogoImage, MenuWrapper } from './style';
import Button from '../Button';
import Logo from '../../assets/logo.png';
//import './Menu.css';
// import ButtonLink from './components/ButtonLink';
//Link do reacr router dom para roteamento entre paginas 
function Menu() {
  return (
    <MenuWrapper >
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <Button as= {Link} className="ButtonLink" to="cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;