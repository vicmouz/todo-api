module.exports = app => {
  const activitiesDB = app.data.activities;
  const controller = {};

  controller.listActivities = (req, res) => res.status(200).json(activitiesDB);

  return controller;
}