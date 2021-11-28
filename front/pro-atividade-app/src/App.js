import { Fragment } from 'react';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Atividade from './pages/atividades/Atividade';
import Cliente from './pages/clientes/Cliente';
import ClienteForm from './pages/clientes/ClienteForm';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

export default function App() {
    return (
        <Fragment>
            <Routes>
                <Route path='/' exact element={<Dashboard />} />
                <Route path='/atividade/lista' element={<Atividade />} />
                <Route path='/cliente/lista' element={<Cliente />} />
                <Route path='/cliente/detalhe/:id' element={<ClienteForm />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Fragment>
    );
}
