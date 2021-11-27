import React from 'react';
import TitlePage from '../../components/TitlePage';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ClienteForm = () => {
    const navigate = useNavigate();

    const voltarParaLista = () => {
        navigate('/cliente/lista');
    };

    return (
        <div className='container p-2'>
            <TitlePage title='Cliente Detalhes'>
                <Button variant='outline-secondary' onClick={voltarParaLista}>
                    <i className='fas fa-arrow-left'></i> Voltar
                </Button>
            </TitlePage>
            <div></div>
        </div>
    );
};

export default ClienteForm;
