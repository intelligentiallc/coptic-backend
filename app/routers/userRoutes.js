const userController = require("../controller/userController")

const CreateUserRoutes = router => {
  router
    .route("/users")
    .get(userController.index)
    .post(userController.new);
  router
    .route("/users/:user_id")
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);
  return router;
};

// Export API routes
module.exports = CreateUserRoutes;
