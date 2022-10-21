import Product from '../models/Product'

export const createProduct = async (req, res) => {
    try {
        const{name, category, price, imgURL} = req.body

        const newProduct = new Product({name, category, price, imgURL});
    
        const productSaved = await newProduct.save()
    
        res.status(201).json(productSaved)
    
    } catch (error) {
       return res.json({message: error.message})
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    
    } catch (error) {
       return res.json({message: error.message})
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.status(200).json(product)
    
    } catch (error) {
       return res.json({message: error.message})
    }
}

export const updateProductById = async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
            new: true
        })
        res.status(200).json(updateProduct)
    
    } catch (error) {
       return res.json({message: error.message})
    }
}

export const deleteProductById = async (req, res) => {
    try {
        const {productId } = req.params;
        await Product.findByIdAndDelete(req.params.productId)
        res.status(204).json()
    
    } catch (error) {
       return res.json({message: error.message})
    }
}