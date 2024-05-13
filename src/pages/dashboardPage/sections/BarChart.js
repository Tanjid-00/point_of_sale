/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import style from '../../../styles/pages/dashboard/sections/barChart.module.css';

const Barchart = () => {
    const [selectOpt, setSelectOpt] = useState('barChart');
    const handleChange = (e) => {
        setSelectOpt(e.target.value);
    };
    // ------------------------------------- Bar chart
    const barChartRef = useRef(null);

    useEffect(() => {
        if (selectOpt === 'barChart') {
            const ctx = barChartRef.current.getContext('2d');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May'],
                    datasets: [
                        {
                            label: 'Sales',
                            data: [65, 59, 80, 81, 56],
                            backgroundColor: '#33b96d7c',
                            borderColor: 'black',
                            borderWidth: 1
                        },
                        {
                            label: 'Purchases',
                            data: [23, 49, 60, 31, 76],
                            backgroundColor: '#3374b97c',
                            borderColor: 'black',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }, [selectOpt]);
    // ------------------------------------- Line chart
    const lineChartRef = useRef(null);
    useEffect(() => {
        if (selectOpt === 'lineChart') {
            // Corrected condition
            const myLineChartRef = lineChartRef.current.getContext('2d');
            const data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                values: [
                    [65, 59, 55, 81, 56, 55, 40],
                    [25, 53, 66, 76, 23, 65, 70]
                ]
            };

            new Chart(myLineChartRef, {
                type: 'line',
                data: {
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Line 1',
                            data: data.values[0],
                            borderColor: 'crimson',
                            fill: false
                        },
                        {
                            label: 'Line 2',
                            data: data.values[1],
                            borderColor: 'seagreen',
                            fill: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [
                            {
                                type: 'time',
                                time: {
                                    unit: 'day'
                                },
                                distribution: 'linear',
                                ticks: {
                                    source: 'auto'
                                }
                            }
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }
            });
        }
    }, [selectOpt]);

    return (
        <div className={style.chartBox}>
            <div className={style.switchBar}>
                <h3>This Week Sales and Purchases</h3>
                <select value={selectOpt} onChange={handleChange}>
                    <option value="barChart">Bar-chart</option>
                    <option value="lineChart">Line-chart</option>
                </select>
            </div>
            {selectOpt === 'barChart' && <canvas className={style.chart} ref={barChartRef}></canvas>}
            {selectOpt === 'lineChart' && <canvas className={style.chart} ref={lineChartRef}></canvas>}
        </div>
    );
};

export default Barchart;
