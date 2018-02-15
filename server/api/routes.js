const controllers = require('./controller');

module.exports = function (app) {
  app.route('/tradfri/device').get(controllers.devices.getAll);
  app.route('/tradfri/device/control/:id').put(controllers.devices.control);
  app.route('/tradfri/group').get(controllers.groups.getAll);
  app.route('/tradfri/group/control/:id').put(controllers.groups.control);
};
