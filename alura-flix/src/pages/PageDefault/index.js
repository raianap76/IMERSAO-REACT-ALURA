import React from 'react';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu'
import styled from 'styled-components'

/**
 * No arquivo index.css , :root definimos a variavel do arquivo de estilização conhecido como o pai
  #root caso nao definimos como por exemplo o tamanha q o
   componente ira ocupar , pode definir no pai(index.css #root), q é no index.css como sera o tamanho 
   desse componente., se aqui vc diz q o o flex:1, no pai (index.css) é necessario informar q o display é flex
   Em :root no arquivo index.css podemos definir as variaveis de estilos var
 */

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 90px;
  padding-left: 5%;
  padding-right: 5%;
  @media (max-width:800px)
  {
    padding-top: 40px;
   }
`;



function PageDefault({ children }) {
    return (
        <>
            <Menu />
            <Main>
                {children}
            </Main>

            <Footer />
        </>
    );
}
export default PageDefault;