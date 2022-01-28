const Product = require("../models/product");

module.exports = {
    
    findAll: (req,res) => {
        Product.find()
        .then(allProducts => res.json({ products: allProducts}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
    },

    findOne: (req,res) => {
        Product.findById({ _id: req.params.id })
        .then(oneProduct => res.json({ product: oneProduct}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
    },

    update: (req,res) => {
        Product.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true}
        )
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
    },

    new: (req,res) => {
        Product.create(req.body)
        .then(newProduct => res.json({ product: newProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
    },

    delete: (req,res) => {
        Product.findByIdAndDelete({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));

    }
}