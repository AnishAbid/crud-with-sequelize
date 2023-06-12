const router = require('express').Router();
const controller = require('../controllers/reminders');
router.get('/',controller.getReminder)
router.get('/:id',controller.getReminderById)
router.post('/',controller.setReminder)
router.put('/:id',controller.update)
router.patch('/:id',controller.updatePatch)
router.delete('/:id',controller.deleteReminder)



module.exports = router;
