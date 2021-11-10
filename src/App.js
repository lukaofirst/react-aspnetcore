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
                    atividades={atividades}
                />
                <AtividadeLista
                    atividades={atividades}
                    deletarAtividade={deletarAtividade}
                />
            </div>
        </Fragment>
    );
};

export default App;
