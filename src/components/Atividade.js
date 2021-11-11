export default function Atividades(props) {
    const { ativ, editarAtividade, deletarAtividade } = props;

    const prioriedadeLabel = (arg) => {
        switch (arg) {
            case '1':
                return 'Baixa';
            case '2':
                return 'Normal';
            case '3':
                return 'Alta';
            default:
                return 'Não definido';
        }
    };

    const prioriedadeStyle = (arg) => {
        switch (arg) {
            case '1':
                return {
                    icon: 'smile',
                    color: 'dark',
                };
            case '2':
                return {
                    icon: 'meh',
                    color: 'success',
                };
            case '3':
                return {
                    icon: 'frown',
                    color: 'warning',
                };
            default:
                return 'Não definido';
        }
    };

    return (
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
                                prioriedadeStyle(ativ.prioridade).color
                            }`}
                        >
                            <i
                                className={`me-1 far fa-${
                                    prioriedadeStyle(ativ.prioridade).icon
                                }`}
                            ></i>
                            {prioriedadeLabel(ativ.prioridade)}
                        </span>
                    </h6>
                </div>
                <p className='card-text'>{ativ.descricao}</p>
                <div className='d-flex justify-content-end border-top pt-2 m-0'>
                    <button
                        className='btn btn-sm btn-outline-primary me-2'
                        onClick={() => editarAtividade(ativ.id)}
                    >
                        <i className='fas fa-pen me-2'></i>
                        Editar
                    </button>
                    <button
                        className='btn btn-sm btn-outline-danger'
                        onClick={() => deletarAtividade(ativ.id)}
                    >
                        <i className='fas fa-trash me-2'></i>
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    );
}
