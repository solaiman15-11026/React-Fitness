
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [dashboard, setDashboard] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDashboard(data))
    }, [])
    return (
        <div className='container my-5'>
            <h1 className='fw-bold'>DashBoard</h1>
            <hr className='mb-5 w-50 mx-auto' />
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                <div className='col'>
                    <div className='card'>
                        <h2>Month Wise Sell</h2>
                        <LineChart width={420} height={300} data={dashboard} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip></Tooltip>
                        </LineChart>
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <h2>Investment vs Revenue</h2>
                        <AreaChart
                            width={420}
                            height={300}
                            data={dashboard}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />

                        </AreaChart>
                    </div>
                </div>
                <div className='col'>
                    <div className='mt-5 card'>
                        <h2>Investment vs Revenue</h2>
                        <BarChart
                            width={420}
                            height={300}
                            data={dashboard}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>
                <div className='col'>
                    <div className='mt-5 card'>
                        <h2>Investment vs Revenue</h2>
                        <PieChart width={420} height={300}>
                            <Pie
                                data={dashboard}
                                dataKey="investment"
                                cx={200}
                                cy={200}
                                outerRadius={60}
                                fill="#8884d8"
                            />
                            <Pie
                                data={dashboard}
                                dataKey="revenue"
                                cx={200}
                                cy={200}
                                innerRadius={70}
                                outerRadius={90}
                                fill="#82ca9d"
                                label
                            />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;