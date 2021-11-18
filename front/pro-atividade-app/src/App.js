import { useState, useEffect, Fragment } from 'react';
// import { Modal, Button } from 'react-bootstrap';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';
import api from './api/atividade';

const App = () => {
    const [atividades, setAtividades] = useState([]);
    const [atividade, setAtividade] = useState({ id: 0 });

    const pegarTodasAtividades = async () => {
        const response = await api.get('atividade');

        return response.data;
    };

    useEffect(() => {
        const getAtividades = async () => {
            const todasAtividades = await pegarTodasAtividades();

            if (todasAtividades) setAtividades(todasAtividades);
        };

        getAtividades();
    }, []);

    const addAtividade = async (ativ) => {
        const response = await api.post('atividade', ativ);

        setAtividades([...atividades, response.data]);
    };

    const editarAtividade = (id) => {
        const atividade = atividades.filter((atividade) => atividade.id === id);

        setAtividade(atividade[0]);
    };

    const cancelarAtividade = () => {
        setAtividade({ id: 0 });
    };

    const atualizarAtividade = async (ativ) => {
        const response = api.put(`atividade/${ativ.id}`, ativ);
        const { id } = response.data;

        setAtividades(
            atividades.map((item) => (item.id === id ? response.data : item))
        );

        setAtividade({ id: 0 });
    };

    const deletarAtividade = async (id) => {
        if (await api.delete(`atividade/${id}`)) {
            const atividadesFiltradas = atividades.filter(
                (atividade) => atividade.id !== id
            );
            setAtividades([...atividadesFiltradas]);
        }
    };

    return (
        <Fragment>
            <div className='container p-2'>
                <AtividadeForm
                    addAtividade={addAtividade}
                    cancelarAtividade={cancelarAtividade}
                    atualizarAtividade={atualizarAtividade}
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
