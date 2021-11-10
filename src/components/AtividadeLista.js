import React from 'react';

import Atividade from './Atividade';

export default function AtividadeLista(props) {
    const { atividades, deletarAtividade } = props;

    return (
        <div className='mt-3'>
            {atividades.map((ativ) => (
                <Atividade
                    key={ativ.id}
                    ativ={ativ}
                    deletarAtividade={deletarAtividade}
                />
            ))}
        </div>
    );
}
