import React, { Fragment } from 'react';
import TitlePage from '../../components/TitlePage';

const Dashboard = () => {
    return (
        <Fragment>
            <div className='container p-2'>
                <TitlePage title='Dashboard' />
                <div>cards aqui...</div>
            </div>
        </Fragment>
    );
};

export default Dashboard;
