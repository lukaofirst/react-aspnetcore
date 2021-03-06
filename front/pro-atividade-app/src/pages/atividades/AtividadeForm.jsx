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
        handleAtividadeModal,
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
        handleAtividadeModal();

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
                        <option defaultValue='NaoDefinido'>Selecione...</option>
                        <option value='Baixa'>Baixa</option>
                        <option value='Normal'>Normal</option>
                        <option value='Alta'>Alta</option>
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
                            className='btn btn-outline-success'
                            type='submit'
                        >
                            <i className='fas fa-plus me-2'></i> Salvar
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
                                <i className='fas fa-times me-2'></i>
                                Cancelar
                            </button>
                        </Fragment>
                    )}
                </div>
            </form>
        </Fragment>
    );
}
