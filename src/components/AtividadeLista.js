import Atividade from './Atividade';

export default function AtividadeLista(props) {
    const { atividades, editarAtividade, deletarAtividade } = props;

    return (
        <div className='mt-3'>
            {atividades.map((ativ) => (
                <Atividade
                    key={ativ.id}
                    ativ={ativ}
                    editarAtividade={editarAtividade}
                    deletarAtividade={deletarAtividade}
                />
            ))}
        </div>
    );
}
