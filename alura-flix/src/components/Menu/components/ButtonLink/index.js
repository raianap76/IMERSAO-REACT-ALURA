import React from 'react';

function ButtonLink(props){
    // props => { className: "O que alguem passar ", href:"/"}
    return (
        <a href={props.href} className = {props.className}>
            Novo Vídeo
        </a>
    );
}
export default ButtonLink;