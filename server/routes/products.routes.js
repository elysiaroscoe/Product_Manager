const { update } = require("../controllers/product.controller");
const Product = require("../controllers/product.controller")

module.exports = (app) => {
    app.get("/api/products", Product.findAll);
    app.get("/api/products/:id", Product.findOne);
    app.put("/api/products/:id/update", Product.update);
    app.post("/api/products/new", Product.new);
    app.delete("/api/products/:id/delete", Product.delete)
}