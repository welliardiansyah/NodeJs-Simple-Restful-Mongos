// Import express router
let Router = require('express').Router();
// Set default API response
Router.get('/', function (req, res){
    res.json({
        status: 'WORKING',
        message: 'This is the /api/ route!'
    });
});
// Import book controller
var bookController = require('../controller/bookController');
// Book routes
Router.route('/books')
    .get(bookController.index)
    .post(bookController.new);

Router.route('/books/:book_id')
    .get(bookController.view)
    .patch(bookController.update)
    .put(bookController.update)
    .delete(bookController.delete);
    
// Export API routes
module.exports = Router;