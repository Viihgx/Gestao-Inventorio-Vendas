# Meu Sistema de Estoque

Este é um sistema de gerenciamento de estoque para pequenas e médias empresas, que permite controlar produtos, categorias, fornecedores e vendas. A plataforma oferece uma interface moderna e intuitiva para facilitar a administração e automação das operações de estoque.

## Funcionalidades

- **Autenticação de Usuário**: Login seguro com JWT para acesso às funcionalidades do sistema.
- **Gerenciamento de Produtos**: Cadastro, edição, exclusão e listagem de produtos.
- **Categorias**: Organização dos produtos por categorias para fácil navegação.
- **Controle de Fornecedores**: Cadastro e gerenciamento de fornecedores.
- **Registro de Vendas**: Atualização automática do inventário com base nas vendas realizadas.
- **Relatórios**: Geração de relatórios para acompanhamento de vendas, estoque baixo e fornecedores ativos.
- **Dashboard**: Resumo das principais informações com gráficos dinâmicos e indicadores.

## Tecnologias Utilizadas

### Frontend
- **React** com **Tailwind CSS**: Para criar uma interface moderna e responsiva.
- **React Router**: Para gerenciamento de rotas e navegação no aplicativo.
- **Axios**: Para fazer requisições HTTP para a API backend.
- **Chart.js/Recharts**: Para visualização de gráficos dinâmicos.

### Backend
- **Spring Boot**: Para criação de uma API RESTful.
- **Spring Security**: Para gerenciamento de autenticação e autorização com JWT.
- **Hibernate**: Para mapeamento objeto-relacional e persistência de dados.
- **H2 Database** (opcional para testes locais) ou outro banco de dados de sua escolha.

## Instalação e Configuração

### Pré-requisitos
- Node.js e npm instalados.
- Java 17 ou superior.
- Maven instalado.

### Passos para rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/meu-sistema-de-estoque.git
   cd meu-sistema-de-estoque
