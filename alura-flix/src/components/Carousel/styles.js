import styled from 'styled-components';

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;


`;

export const VideoCardGroupContainer = styled.section`
color:var(--white);
min-height:197px;
margin-left:5%;
margin-bottom:16px;

`;

export const ExtraLink = styled.a`
margin-left:16px;
text-decoration:none;

transition:opacity .3s;

&:hover,
&:focus{
opacity: .5;
}
@media (max-width:800px){
    display:block;
    margin-bottom:16px;
    margin-left:0;
}
`;

export const Title = styled.h3`
border-radius:4px;
font-size: 35px;
font-weight:normal;
line-height:1;
margin-bottom:16px;
padding:20px;
display:inline-block;
@media (max-width:800px){
    font-size:18px;
    padding:10px;

}
`;





