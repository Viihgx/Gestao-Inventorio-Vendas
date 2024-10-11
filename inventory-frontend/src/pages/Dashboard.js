// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error("Token não encontrado.");
                    return;
                }
                const response = await axios.get('http://localhost:8080/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserInfo(response.data);
            } catch (error) {
                console.error("Erro ao buscar informações do usuário:", error);
                setUserInfo(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    if (loading) {
        return <p className="text-center mt-8">Carregando...</p>;
    }

    return (
        <div className="flex">
            <div className="flex-1 flex flex-col min-h-screen">
                <main className="flex-1 p-6 bg-gray-100">
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                        {userInfo ? (
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-xl">Bem-vindo, {userInfo.nome}!</p>
                                <p className="text-gray-600">Email: {userInfo.email}</p>
                                {/* Outras informações do usuário */}
                                <div className="mt-8">
                                    <ProductList />
                                </div>
                            </div>
                        ) : (
                            <p className="text-red-500">Não foi possível carregar as informações do usuário.</p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
