const listController = require("../controller/listController")

const CreateListRoutes = router => {
  router
    .route("/lists")
    .get(listController.index)
    .post(listController.new);
  router
    .route("/lists/:list_id")
    .get(listController.view)
    .patch(listController.update)
    .put(listController.update)
    .delete(listController.delete);
  return router;
};

// Export API routes
module.exports = CreateListRoutes;
