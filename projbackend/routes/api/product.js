const router = require("express").Router();
const productRouter = require("../../controllers/product_controller");

// TODO
// check login, authenticatd, isAdmin
router.post("/create/:userId", productRouter.create);

router.param("/productId", productRouter.getProductById);
router.get("/:proudctId", productRouter.list);
router.delete("/:productId/:userId", productRouter.remove);
router.put("/:productId/:userId", productRouter.update);
// router.get("/categories", productRouter);
// router.get("/create", productRouter.create);
module.exports = router;
