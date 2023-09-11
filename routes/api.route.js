const router = require('express').Router();
const personController = require('../controllers/personController');

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});
router.post('', personController.createPerson);
router.get('/:id', personController.getPersonById);
router.put('/:id', personController.updatePerson);
router.delete('/:id', personController.deletePerson);

module.exports = router;
