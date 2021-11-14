import { useState, useEffect, Fragment } from 'react';

const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: '',
};

export default function AtividadeForm(props) {
    const {
        addAtividade,
        ativSelecionada,
        atualizarAtividade,
        cancelarAtividade,
    } = props;

    const [atividade, setAtividade] = useState(atividadeAtual());

    useEffect(() => {
        if (ativSelecionada.id !== 0) {
            setAtividade(ativSelecionada);
        }
    }, [ativSelecionada]);

    const inputTextHandler = (e) => {
        const { name, value } = e.target;

        setAtividade({
            ...atividade,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (ativSelecionada.id !== 0) {
            atualizarAtividade(atividade);
        } else {
            addAtividade(atividade);
        }

        setAtividade(atividadeInicial);
    };

    const handleCancelar = (e) => {
        e.preventDefault();

        cancelarAtividade();

        setAtividade(atividadeInicial);
    };

    function atividadeAtual() {
        if (ativSelecionada.id !== 0) {
            return ativSelecionada;
        } else {
            return atividadeInicial;
        }
    }

    return (
        <Fragment>
            <h1>Atividade {atividade.id !== 0 ? atividade.id : ''}</h1>
            <form className='row g-3' onSubmit={handleSubmit}>
                <div className='col-md-6'>
                    <label className='form-label'>Título</label>
                    <input
                        className='form-control'
                        id='titulo'
                        name='titulo'
                        type='text'
                        onChange={inputTextHandler}
                        value={atividade.titulo}
                    />
                </div>
                <div className='col-md-6'>
                    <label className='form-label'>Prioridade</label>
                    <select
                        className='form-select'
                        id='prioridade'
                        name='prioridade'
                        onChange={inputTextHandler}
                        value={atividade.prioridade}
                    >
                        <option defaultValue='0'>Selecione...</option>
                        <option value='1'>Baixa</option>
                        <option value='2'>Normal</option>
                        <option value='3'>Alta</option>
                    </select>
                </div>
                <div className='col-md-12'>
                    <label className='form-label'>Descrição</label>
                    <textarea
                        className='form-control'
                        id='descricao'
                        name='descricao'
                        type='text'
                        onChange={inputTextHandler}
                        value={atividade.descricao}
                    ></textarea>
                    <hr />
                </div>
                <div className='col-12 mt-0'>
                    {atividade.id === 0 ? (
                        <button
                            className='btn btn-outline-secondary'
                            type='submit'
                        >
                            <i className='fas fa-plus me-2'></i> Atividade
                        </button>
                    ) : (
                        <Fragment>
                            <button
                                className='btn btn-outline-success me-2'
                                type='submit'
                            >
                                <i className='fas fa-plus me-2'></i> Atualizar
                            </button>
                            <button
                                className='btn btn-outline-warning'
                                onClick={handleCancelar}
                            >
                                <i class='fas fa-times me-2'></i>
                                Cancelar
                            </button>
                        </Fragment>
                    )}
                </div>
            </form>
        </Fragment>
    );
}
