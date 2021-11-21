import { Fragment } from 'react';
import './App.css';
import Atividade from './pages/atividades/Atividade';
import { Route, Routes, Link } from 'react-router-dom';

export default function App() {
    return (
        <Fragment>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/atividades' element={<Atividade />} />
                <Route path='/cliente' element={<Cliente />} />
            </Routes>
        </Fragment>
    );
}

const Cliente = () => {
    return (
        <div className='container'>
            <h1>Cliente</h1>
            <Link to='/home'>Home</Link>
        </div>
    );
};

const Home = () => {
    return (
        <div className='container'>
            <h1>Home</h1>
            <Link to='/cliente'>Cliente</Link>
        </div>
    );
};
