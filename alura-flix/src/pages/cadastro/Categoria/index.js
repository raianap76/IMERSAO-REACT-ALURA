import React, { useState, useEffect } from 'react'
import PageDefault from '../../PageDefault';
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';



function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }


    const [values, setValues] = useState([valoresIniciais]);
    const [categorias, setCategorias] = useState(['teste']);
    // const [nomeDaCategoria, setNomeDaCategoria] = useState('valor')
    /*style={{background: nomeDaCategoria}}*/
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor // nomr:'valor q vem do input naquele momento'
        })

    }

    function handleChange(infosDoEvento) {
        // const { getAttribute, value } = infosDoEvento.target;
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }
    useEffect(() => {
        const URL_TOP = window.location.href.includes('localhost')
        ?'http://localhost:8080/categorias'
        :'https://dev-alura-flix.herokuapp.com/categorias'
          fetch(URL_TOP)
            .then(async (respostaDoServer) => {
              if (respostaDoServer.ok) {
                const resposta = await respostaDoServer.json();
                setCategorias(resposta);
                return;
              }
              throw new Error('Não foi possível pegar os dados');
            });
        
      }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria {values.nome}</h1>
            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais)
            }}>
                <div>
                    <FormField
                        label="Nome da Categoria"
                        type="text"
                        name="nome"
                        value={values.nome}
                        onChange={handleChange}
                    />

                    <div>
                        {/*State*/}

                        <FormField
                            label="Descrição"
                            type="textarea"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange} />



                    </div>


                    <FormField
                        label="Cor"
                        type="color"
                        name="cor"
                        value={values.cor}
                        onChange={handleChange}
                    />



                    <Button>
                        Cadastrar
                </Button>
                </div>
            </form>
            {categorias.length ===0 && (
                <div>
                    {/* carregando */}
                    Loading...
                </div>
            ) }

            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={`${categoria.nome}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>


            <Link to="/" >Ir Para Home </Link>
        </PageDefault >
    );
}

export default CadastroCategoria;