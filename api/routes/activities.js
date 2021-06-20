module.exports = app => {
  const controller = app.controllers.activities;

  app.route('/api/v1/activities')
    .get(controller.listActivities);
}