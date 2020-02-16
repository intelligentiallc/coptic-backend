const itemController = require("../controller/itemController")

const CreateItemRoutes = router => {
  router
    .route("/items")
    .get(itemController.index)
    .post(itemController.new);
  router
    .route("/items/:item_id")
    .get(itemController.view)
    .patch(itemController.update)
    .put(itemController.update)
    .delete(itemController.delete);
  return router;
};

// Export API routes
module.exports = CreateItemRoutes;
