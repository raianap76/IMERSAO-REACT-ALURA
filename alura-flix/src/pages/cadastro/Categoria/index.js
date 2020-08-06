import React, { useState, useEffect } from 'react'
import PageDefault from '../../PageDefault';
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';



function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const { handleChange, values, clearForm } = useForm(valoresIniciais);
    const [categorias, setCategorias] = useState([]);

    // const [nomeDaCategoria, setNomeDaCategoria] = useState('valor')
    /*style={{background: nomeDaCategoria}}*/

    useEffect(() => {
        const URL_TOP = window.location.href.includes('localhost')
            ? 'http://localhost:8080/categorias'
            : 'https://dev-alura-flix.herokuapp.com/categorias'
        fetch(URL_TOP)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            });

    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria {values.nome}</h1>
            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values,
                ]);
                clearForm();
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
            {categorias.length === 0 && (
                <div>
                    {/* Cargando... */}
          Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria) => (
                    <li key={`${categoria.titulo}`}>
                        {categoria.titulo}
                    </li>
                ))}
            </ul>


            <Link to="/" >Ir Para Home </Link>
        </PageDefault >
    );
}

export default CadastroCategoria;