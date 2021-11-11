import { useState, useEffect } from 'react';

const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: '',
};

export default function AtividadeForm(props) {
    const { addAtividade, ativSelecionada, atividades } = props;

    const [atividade, setAtividade] = useState(atividadeAtual());

    useEffect(() => {
        if (ativSelecionada.id !== 0) {
            setAtividade(ativSelecionada);
        }
    }, [ativSelecionada]);

    const inputTextHandler = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        setAtividade({
            ...atividade,
            [name]: value,
        });
    };

    function atividadeAtual() {
        if (ativSelecionada.id !== 0) {
            return ativSelecionada;
        } else {
            return atividadeInicial;
        }
    }

    return (
        <form className='row g-3'>
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
            </div>
            <hr />
            <div className='col-12'>
                <button
                    className='btn btn-outline-secondary'
                    onClick={addAtividade}
                >
                    + Atividade
                </button>
            </div>
        </form>
    );
}
