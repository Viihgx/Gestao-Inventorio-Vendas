import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // URL do backend
});

// Função para obter os produtos
export const getProducts = () => {
    return api.get('/produtos'); 
};

export default api;