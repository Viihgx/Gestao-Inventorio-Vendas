import React, { useEffect, useState } from 'react';
import { getProducts } from '../service/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Carregar os produtos ao montar o componente
        getProducts()
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar produtos:', error);
            });
    }, []);

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
