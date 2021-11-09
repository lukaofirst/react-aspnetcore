import { useState, Fragment } from 'react';
// import { Modal, Button } from 'react-bootstrap';
import './App.css';

let initialState = [
    {
        id: 1,
        prioridade: 3,
        titulo: 'título',
        descricao: 'Primeira Atividade',
    },
    {
        id: 2,
        prioridade: 2,
        titulo: 'título',
        descricao: 'Segunda Atividade',
    },
];

const App = () => {
    const [atividades, setAtividades] = useState(initialState);

    const prioriedadeLabel = (arg) => {
        switch (arg) {
            case 1:
                return 'Baixa';
            case 2:
                return 'Normal';
            case 3:
                return 'Alta';
            default:
                return 'Não definido';
        }
    };

    const prioriedadeStyle = (arg) => {
        switch (arg) {
            case 1:
                return {
                    icon: 'smile',
                    color: 'dark',
                };
            case 2:
                return {
                    icon: 'meh',
                    color: 'success',
                };
            case 3:
                return {
                    icon: 'frown',
                    color: 'warning',
                };
            default:
                return 'Não definido';
        }
    };

    const addAtividade = (e) => {
        e.preventDefault();

        const atividade = {
            id: document.getElementById('id').value,
            prioridade: document.getElementById('prioridade').value,
            titulo: document.getElementById('titulo').value,
            descricao: document.getElementById('descricao').value,
        };

        setAtividades([...atividades, { ...atividade }]);
    };

    return (
        <Fragment>
            <div className='container p-2'>
                <form className='row g-3'>
                    <div className='col-md-6'>
                        <label className='form-label'>Id</label>
                        <input
                            id='id'
                            type='text'
                            className='form-control'
                            readOnly
                            value={
                                Math.max.apply(
                                    Math,
                                    atividades.map((item) => item.id)
                                ) + 1
                            }
                        />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Prioridade</label>
                        <select className='form-select' id='prioridade'>
                            <option defaultValue=''>Selecione...</option>
                            <option value='1'>Baixa</option>
                            <option value='2'>Normal</option>
                            <option value='3'>Alta</option>
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Título</label>
                        <input
                            id='titulo'
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Descrição</label>
                        <input
                            id='descricao'
                            type='text'
                            className='form-control'
                        />
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
                <div className='mt-3'>
                    {atividades.map((ativ) => (
                        <div
                            key={ativ.id}
                            className={`card mb-2 shadow-sm border border-${
                                prioriedadeStyle(ativ.prioridade).color
                            }`}
                        >
                            <div className='card-body'>
                                <div className='d-flex justify-content-between'>
                                    <h5 className='card-title'>
                                        <span className='badge bg-secondary me-1'>
                                            {ativ.id}
                                        </span>
                                        - {ativ.titulo}
                                    </h5>
                                    <h6>
                                        Prioridade:
                                        <span
                                            className={`ms-1 text-${
                                                prioriedadeStyle(
                                                    ativ.prioridade
                                                ).color
                                            }`}
                                        >
                                            <i
                                                className={`me-1 far fa-${
                                                    prioriedadeStyle(
                                                        ativ.prioridade
                                                    ).icon
                                                }`}
                                            ></i>
                                            {prioriedadeLabel(ativ.prioridade)}
                                        </span>
                                    </h6>
                                </div>
                                <p className='card-text'>{ativ.descricao}</p>
                                <div className='d-flex justify-content-end border-top pt-2 m-0'>
                                    <button className='btn btn-sm btn-outline-primary me-2'>
                                        <i className='fas fa-pen me-2'></i>
                                        Editar
                                    </button>
                                    <button className='btn btn-sm btn-outline-danger'>
                                        <i className='fas fa-trash me-2'></i>
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default App;
