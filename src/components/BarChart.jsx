import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ priceRange }) => {
    const [chartData, setChartData] = useState({
        series: [{
            data: []
        }],
        options: {
            fill: {
                colors: ['#488BF2']
            },
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 5,
                    columnWidth: '80%',
                }
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                width: 0
            },
            xaxis: {
                categories: [],
                labels: {
                    rotate: -45,
                    style: {
                        colors: ['#393C3C'],
                        fontSize: '13px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                    }
                },
            },
            yaxis: {
                title: {
                    text: 'No. of Items',
                    style: {
                        fontSize: '14px',
                        fontWeight: '600',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        color: '#393C3C'
                    },
                },
                labels: {
                    style: {
                        colors: ['#393C3C'],
                        fontSize: '11px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                    }
                }
            },
            responsive: [{
                breakpoint: 670,
                options: {
                    chart: {
                        width: '100%',
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '70%',
                            endingShape: 'rounded',
                            borderRadius: 2,
                        },
                    },
                },
            }]
        }
    });

    useEffect(() => {
        if (priceRange) {
            const data = priceRange.map(item => item.count);
            const categories = priceRange.map(item => item.range);

            setChartData({
                ...chartData,
                series: [{
                    data: data
                }],
                options: {
                    ...chartData.options,
                    xaxis: {
                        ...chartData.options.xaxis,
                        categories: categories
                    },
                    yaxis: {
                        stepSize: 1,
                        ...chartData.options.yaxis,
                        min: 0,
                        max: Math.max(...data)
                    }
                }
            });
        }
    }, [priceRange]);

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} width={600} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexChart;
