const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const myCategory = await Category.findAll({
      include: [Product],
    });
    res.status(200).json(myCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const myCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!myCategory) {
      res.status(404).json({ message: "This id does not return a Category" });
      return;
    }
    res.status(200).json(myCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const myCategory = await Category.create(req.body);
    res.status(200).json(myCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const myCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (!myCategory[0]) {
      res.status(404).json({ message: "This id does not return a Category" });
      return;
    }
    res.status(200).json(myCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const myCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!myCategory) {
      res.status(404).json({ message: "This id will be deleted" });
      return;
    }
    res.status(200).json(myCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
