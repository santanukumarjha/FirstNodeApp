'use strict';
module.exports = function(app) {
  var controller = require('../controllers/node-app-controller');

  // controller Routes
  app.route('/orders')
    .get(controller.list_all_Orders)
    .post(controller.create_a_Order);


  app.route('/orders/:orderId')
    .get(controller.read_a_Order)
    .put(controller.update_a_Order)
    .delete(controller.delete_a_Order);
};