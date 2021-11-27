import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import TitlePage from '../../components/TitlePage';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const clientes = [
    {
        id: 1,
        nome: 'Twitter',
        responsavel: 'Bartholomeu',
        contato: 99999999,
        situacao: 'Ativo',
    },
    {
        id: 2,
        nome: 'React',
        responsavel: 'Facebook',
        contato: 88888888,
        situacao: 'Ativo',
    },
    {
        id: 3,
        nome: 'Angular',
        responsavel: 'Google',
        contato: 77777777,
        situacao: 'Desativado',
    },
    {
        id: 4,
        nome: 'C#',
        responsavel: 'Microsoft',
        contato: 66666666,
        situacao: 'Ativo',
    },
    {
        id: 5,
        nome: 'NodeJS',
        responsavel: 'Open Source',
        contato: 99999999,
        situacao: 'Ativo',
    },
];

const ClienteLista = () => {
    const navigate = useNavigate();
    const [termoBusca, setTermoBusca] = useState('');

    const handleInputChange = (e) => {
        setTermoBusca(e.target.value);
    };

    const clientesFiltrados = clientes.filter((cliente) => {
        return (
            //cliente.nome.toLocaleLowerCase().indexOf(termoBusca) !== -1 ||
            //cliente.responsavel.toLocaleLowerCase().indexOf(termoBusca) !== -1

            Object.values(cliente)
                .join(' ')
                .toLowerCase()
                .includes(termoBusca.toLowerCase())
        );
    });

    const novoCliente = () => {
        navigate('/cliente/detalhe');
    };

    return (
        <Fragment>
            <TitlePage title='Cliente Lista'>
                <Button variant='outline-secondary' onClick={novoCliente}>
                    <i className='fas fa-plus me-2'></i> Novo Cliente
                </Button>
            </TitlePage>
            <InputGroup className='my-3'>
                <InputGroup.Text>Buscar:</InputGroup.Text>
                <FormControl
                    placeholder='pelo nome do cliente'
                    onChange={handleInputChange}
                />
            </InputGroup>
            <table className='table table-striped table-hover'>
                <thead className='table-dark mt-3'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Responsável</th>
                        <th scope='col'>Contato</th>
                        <th scope='col'>Situação</th>
                        <th scope='col'>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {clientesFiltrados.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.responsavel}</td>
                            <td>{cliente.contato}</td>
                            <td>{cliente.situacao}</td>
                            <td>
                                <div>
                                    <button
                                        className='btn btn-sm btn-outline-primary me-2'
                                        onClick={() =>
                                            navigate(
                                                `/cliente/detalhe/${cliente.id}`
                                            )
                                        }
                                    >
                                        <i className='fas fa-user-edit me-2'></i>
                                        Editar
                                    </button>
                                    <button className='btn btn-sm btn-outline-danger me-2'>
                                        <i className='fas fa-user-times me-2'></i>
                                        Desativar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ClienteLista;
