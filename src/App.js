import { useState, Fragment } from 'react';
// import { Modal, Button } from 'react-bootstrap';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';
import './App.css';

let initialState = [
    {
        id: 1,
        prioridade: '3',
        titulo: 'título',
        descricao: 'Primeira Atividade',
    },
    {
        id: 2,
        prioridade: '2',
        titulo: 'título',
        descricao: 'Segunda Atividade',
    },
];

const App = () => {
    const [atividades, setAtividades] = useState(initialState);
    const [atividade, setAtividade] = useState({});

    const addAtividade = (e) => {
        e.preventDefault();

        const atividade = {
            id:
                Math.max.apply(
                    Math,
                    atividades.map((item) => item.id)
                ) + 1,
            prioridade: document.getElementById('prioridade').value,
            titulo: document.getElementById('titulo').value,
            descricao: document.getElementById('descricao').value,
        };

        setAtividades([...atividades, { ...atividade }]);
    };

    const editarAtividade = (id) => {
        const atividade = atividades.filter((atividade) => atividade.id === id);

        setAtividade(atividade[0]);
    };

    const deletarAtividade = (id) => {
        const atividadesFiltradas = atividades.filter(
            (atividade) => atividade.id !== id
        );
        setAtividades([...atividadesFiltradas]);
    };

    return (
        <Fragment>
            <div className='container p-2'>
                <AtividadeForm
                    addAtividade={addAtividade}
                    ativSelecionada={atividade}
                    atividades={atividades}
                />
                <AtividadeLista
                    atividades={atividades}
                    editarAtividade={editarAtividade}
                    deletarAtividade={deletarAtividade}
                />
            </div>
        </Fragment>
    );
};

export default App;
