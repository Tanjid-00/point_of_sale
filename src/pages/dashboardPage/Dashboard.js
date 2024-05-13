import React from 'react';
import style from '../../styles/pages/dashboard/dashboard/dashboard.module.css';
import SecOne from './sections/SecOne';
import Barchart from './sections/BarChart';
import PieChart from './sections/PieChart';
const Dashboard = () => {
    return (
        <div className={style.container}>
            <SecOne />
            <div className={style.charts}>
                <Barchart />
                <PieChart />
            </div>
        </div>
    );
};

export default Dashboard;
