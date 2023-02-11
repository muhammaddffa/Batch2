const menuRoutes = require('express').Router();
const menuControllers = require('../controllers/menuControllers');
// const authMiddleware = require('../middleware')
const uploaddMiddleware = require('../middleware/uploadMiddleware') 
const cloudinaryMiddleware = require('../middleware/cloudinaryMiddleware');
const { searchBytitle } = require('../controllers/menuControllers');


menuRoutes.post ('/', uploaddMiddleware,
 cloudinaryMiddleware,
menuControllers.postDataMenu, searchBytitle);
menuRoutes.get('/', menuControllers.getAllData);
menuRoutes.delete('/:id', menuControllers.deleteData);
menuRoutes.put('/:id', menuControllers.updateData);
menuRoutes.get('/:id', menuControllers.getByid);

module.exports = menuRoutes;