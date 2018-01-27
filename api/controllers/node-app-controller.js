'use strict';


var mongoose = require('mongoose'),
  Order = mongoose.model('Orders');

exports.list_all_Orders = function(req, res) {
  Order.find({}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};




exports.create_a_Order = function(req, res) {
  var new_Order = new Order(req.body);
  new_Order.predicted = Math.floor(Math.random() * 1000)+1;
  new_Order.save(function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};


exports.read_a_Order = function(req, res) {
  Order.findById(req.params.orderId, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};


exports.update_a_Order = function (req, res) {
  Order.findById(req.params.orderId, function (err, order) {
    if (err)
      res.send(err);
    req.body = { 'createdTillNow': order.createdTillNow + order.quantity }
    Order.findOneAndUpdate({ _id: req.params.orderId }, req.body, { new: true }, function (err, order) {
      if (err)
        res.send(err);
      res.json(order);
    });
  });

};


exports.delete_a_Order = function(req, res) {


  Order.remove({
    _id: req.params.orderId
  }, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'Order successfully deleted' });
  });
};