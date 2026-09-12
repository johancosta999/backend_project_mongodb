const express= require('express')
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

const {
    createItem,
    getAllItems,
    getItem,
    updateItem,
    deleteItem
} = require('../controllers/item.controller')

router.post('/create', createItem, authMiddleware);
router.get('/items', getAllItems, authMiddleware);
router.get('/item/:id', getItem, authMiddleware)
router.put('/item/:id', updateItem, authMiddleware);
router.delete('/item/:id', deleteItem, authMiddleware)

module.exports = router;