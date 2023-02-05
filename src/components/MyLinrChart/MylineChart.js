import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MylineChart = () => {
    const data = [
        {
            supplierName: 'Supplier A',
            price: 4000,
            sales: 2400,

        },
        {
            supplierName: 'Supplier B',
            price: 3000,
            sales: 1398,

        },
        {
            supplierName: 'Supplier C',
            price: 2000,
            sales: 9800,

        },
        {
            supplierName: 'Supplier D',
            price: 2780,
            sales: 3908,

        },
        {
            supplierName: 'Supplier E',
            price: 1890,
            sales: 4800,

        },
        {
            supplierName: 'Supplier F',
            price: 2390,
            sales: 3800,

        },
        {
            supplierName: 'Supplier G',
            price: 3490,
            sales: 4300,

        },
    ];
    return (
        <LineChart width={800} height={500} data={data}>
            <Line dataKey={'price'}></Line>
            <Line dataKey={'sales'}></Line>
            <XAxis dataKey={'supplierName'}></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
        </LineChart>
    );
};

export default MylineChart;