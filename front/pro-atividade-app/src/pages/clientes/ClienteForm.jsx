import React from 'react';
import TitlePage from '../../components/TitlePage';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ClienteForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className='container p-2'>
            <TitlePage title={`Cliente Detalhes ${id !== undefined ? id : ''}`}>
                <Button
                    variant='outline-secondary'
                    onClick={() => navigate(-1)}
                >
                    <i className='fas fa-arrow-left'></i> Voltar
                </Button>
            </TitlePage>
            <div></div>
        </div>
    );
};

export default ClienteForm;
