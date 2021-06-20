module.exports = app => {
  const controller = app.controllers.activities;

  app.route('/api/v1/activities').get(controller.listActivities);
  app.route('/api/v1/new_activity').post(controller.createActivity);
  app.route('/api/v1/activity/:activity_id').put(controller.updateActivity);
  app.route('/api/v1/activity/:activity_id').delete(controller.removeActivity);
};
