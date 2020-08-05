import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/*
request devolve informações sobre a requisição, como 
cabeçalho e corpo, dados do usuário no geral vindos pelo frontend
response, oq vou devolver do meu backend para meu frontend
*/

// http://localhost:3333/users -> isso é uma rota
// /users -> isso é um recurso 

/*
    GET: Buscar/Listar uma informação
    POST: Criar alguma nova informação
    PUT: Atualizar uma informação
    DELETE: Deletar uma informação existente
*/ 

/*
    Corpo/Body (Request Body): dados para criação/atualização
    de um registro
    Route Params: identificar qual recurso quero atualizar/deletar
    request.params
    Query Params: Paginação, filtros, ordenação etc...
    request.query
*/ 

// Utilizamos o knex, pois ele permite escrever banco de dados no javascript.

app.listen(3333);
