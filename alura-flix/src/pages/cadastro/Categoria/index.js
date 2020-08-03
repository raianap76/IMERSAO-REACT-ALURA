import React, { useState } from 'react'
import PageDefault from '../../PageDefault';
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';




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
                        <label>Descrição
                <textarea
                                type="text"
                                value={values.descricao}
                                name="descricao"
                                onChange={handleChange} />
                        </label>


                    </div>


                    <FormField
                        label="Cor"
                        type="color"
                        value={values.cor}
                        onChange={handleChange}
                    />



                    <button>
                        Cadastrar
                </button>
                </div>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria} ${indice}`}>
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