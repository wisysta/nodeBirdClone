import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.3/antd.css" />
            </Head>
            <AppLayout>
                <div>Hello, next</div>
            </AppLayout>
        </>
    )
};

export default Home;
