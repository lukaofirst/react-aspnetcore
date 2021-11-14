import { useState, useEffect, Fragment } from 'react';
// import { Modal, Button } from 'react-bootstrap';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';
import './App.css';

const App = () => {
    const [index, setIndex] = useState(0);
    const [atividades, setAtividades] = useState([]);
    const [atividade, setAtividade] = useState({ id: 0 });

    useEffect(() => {
        atividades.length <= 0
            ? setIndex(1)
            : setIndex(
                  Math.max.apply(
                      Math,
                      atividades.map((item) => item.id)
                  ) + 1
              );
    }, [atividades]);

    const addAtividade = (ativ) => {
        setAtividades([...atividades, { ...ativ, id: index }]);
    };

    const editarAtividade = (id) => {
        const atividade = atividades.filter((atividade) => atividade.id === id);

        setAtividade(atividade[0]);
    };

    const cancelarAtividade = () => {
        setAtividade({ id: 0 });
    };

    const atualizarAtividade = (ativ) => {
        setAtividades(
            atividades.map((item) => (item.id === ativ.id ? ativ : item))
        );

        setAtividade({ id: 0 });
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
