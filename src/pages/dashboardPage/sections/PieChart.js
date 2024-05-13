import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import style from '../../../styles/pages/dashboard/sections/pieChart.module.css';

const PieChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChartRef = chartRef.current.getContext('2d');
        const data = {
            labels: ['Shirts', 'Pants', 'Shoes', 'Sunglass', 'Watch'],
            values: [12, 7, 11, 5, 9]
        };
        new Chart(myChartRef, {
            type: 'pie',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        data: data.values,
                        backgroundColor: ['#FFA07A', '#BC8F8F', '#F08080', '#CD5C5C', '#FA8072']
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'right' // Set legend position to the right side
                }
            }
        });
    }, [data]);

    return (
        <div className={style.chartBox}>
            <h3>Pie Chart</h3>
            <div>
                <canvas className={style.chart} ref={chartRef}></canvas>
            </div>
        </div>
    );
};

export default PieChart;
