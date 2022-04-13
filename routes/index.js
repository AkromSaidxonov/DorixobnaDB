const express = require('express');

const router = express.Router();

const DoriController = require('../controllers/index');
const MarkazController = require('../controllers/markazController');
const IchkiController = require('../controllers/ichkiController');
const MuruvvatController = require('../controllers/MuruvvatControllaer');

router
  .route('/byudjets')
  .post((req, res) => DoriController.create(req, res))
  .get((req, res) => DoriController.getAll(req, res));
router
  .route('/byudjets/:id')
  .delete((req, res) => DoriController.remove(req, res));

  // 

  router
  .route('/markazs')
  .post((req, res) => MarkazController.create(req, res))
  .get((req, res) => MarkazController.getAll(req, res));

  router
  .route('/markazs/:id')
  .delete((req, res) => DoriController.remove(req, res));

  // 

  router
  .route('/ichkis')
  .post((req, res) => IchkiController.create(req, res))
  .get((req, res) => IchkiController.getAll(req, res));

  router
  .route('/ichkis/:id')
  .delete((req, res) => IchkiController.remove(req, res));

  // 

  router
  .route('/muruvvats')
  .post((req, res) => MuruvvatController.create(req, res))
  .get((req, res) => MuruvvatController.getAll(req, res));

  router
  .route('/muruvvats/:id')
  .delete((req, res) => MuruvvatController.remove(req, res));
  // 



  module.exports = router;
