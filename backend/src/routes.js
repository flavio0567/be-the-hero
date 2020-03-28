const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs',  OngController.store);
routes.delete('/ongs/:id',  OngController.delete);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',  IncidentController.index);
routes.post('/incidents',  IncidentController.store);
routes.delete('/incidents/:id',  IncidentController.delete);

routes.post('/sessions',  SessionController.index);

module.exports = routes;