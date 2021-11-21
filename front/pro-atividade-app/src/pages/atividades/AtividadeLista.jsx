import AtividadeItem from './AtividadeItem';

export default function AtividadeLista(props) {
    const { atividades, editarAtividade, handleConfirmModal } = props;

    return (
        <div className='mt-3'>
            {atividades.map((ativ) => (
                <AtividadeItem
                    key={ativ.id}
                    ativ={ativ}
                    editarAtividade={editarAtividade}
                    handleConfirmModal={handleConfirmModal}
                />
            ))}
        </div>
    );
}
