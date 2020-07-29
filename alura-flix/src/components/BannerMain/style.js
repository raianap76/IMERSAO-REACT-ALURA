import styled from 'styled-components';

export const BannerMainContainer = styled.section`
  height:80vh;
  color:var(--white);
  background-image:${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size:cover;
  background-position:center;
  @media(max-width:800px){
      height:auto;
      min-height:50vh;

  }
 
`;

export const ContentAreaContainer = styled.section`
align-items:center;
justify-content:center;
display:flex;
height:100%;
margin-left:5%;
margin-right:5%;

@media(max-width:800px){
    padding-top:100px;
    flex-direction:column;
}


`;

ContentAreaContainer.Item = styled.div`
width:50%;
margin-bottom:50px;
@media (max-width:800px){
    width:100%;
}
`;

ContentAreaContainer.Category = styled.h1`

`;

ContentAreaContainer.Description = styled.p`
@media (max-width: 800px){
    display:none;
}
`;

ContentAreaContainer.Title = styled.h2`
font-weight:300;
font-size:40px;
line-height:1;
margin-top:0;
margin-bottom:32px;
@media (max-width:800px){
    font-size: 32px;
    text-align:center;
}
`;



export const WatchButton = styled.button`
 cursor:pointer;
 padding:16px 24px;
 font-weight:bold;
 font-size:16px;
 outline:none;
 border:0;
 display:none;
 border-radius:4px;
 color: var(--black);
 background-color: var(--white);
margin-left:auto;
margin-right:auto;
@media (max-width:800px){
    display:block;
}

`;