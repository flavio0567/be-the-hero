const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const validateOngStore = require('./validators/OngStore');
const validateIncidentStore = require('./validators/IncidentStore');
const validateIncidentDelete = require('./validators/IncidentDelete');
const validateIncidentIndex = require('./validators/IncidentIndex');
const validateProfileIndex = require('./validators/ProfileIndex');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', validateOngStore, OngController.store);
routes.delete('/ongs/:id',  OngController.delete);

routes.get('/profile', validateProfileIndex, ProfileController.index);

routes.get('/incidents', validateIncidentIndex, IncidentController.index);
routes.post('/incidents', validateIncidentStore, IncidentController.store);
routes.delete('/incidents/:id', validateIncidentDelete, IncidentController.delete);

routes.post('/sessions',  SessionController.index);

module.exports = routes;