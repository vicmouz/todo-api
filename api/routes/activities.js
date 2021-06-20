module.exports = app => {
  const controller = app.controllers.activities;
  app.route('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    ); // If needed
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type'
    ); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  });
  app.route('/api/v1/activities').get(controller.listActivities);
  app.route('/api/v1/new_activity').post(controller.createActivity);
  app.route('/api/v1/activity/:activity_id').put(controller.updateActivity);
  app.route('/api/v1/activity/:activity_id').delete(controller.removeActivity);
};
