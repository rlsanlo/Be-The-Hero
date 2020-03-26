const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionController');
const routes = express.Router();

/*
* Metodos HTTP
*
* GET: Buscar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* Delete: Deletar uma informação do back-end
*/ 

/*
* Tipos de Parametro
*
* Query: Parametros nomeados enviados na rota após "?", servem para (filtros, paginação)
* Routes Params: Parametros utilizados para identificar recursos
* Request Body: corpo da requisição, utilizado para criar ou alterar recursos
*/

routes.post('/sessions', SessionsController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;