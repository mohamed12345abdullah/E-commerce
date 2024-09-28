

//import
const product=require('../mongoModels/product');



const getAllProducts=async(req,res)=>{
    const id=req.params['id'];
    res.end(`product id : ${id} get all Products`)
}

const getProduct=async(req,res)=>{
    const id=req.params['id'];
    res.end(`product id : ${id} get this product`)
}

const addProduct=async(req,res)=>{
    const{product_name}=req.body;
    console.log(req.body);
    
    // const newProduct=new product({
    //     product_name
    // })
    
//    newProduct.save();
    const id=req.params['id'];
    res.end(`product id : ${id} add product`)}

const updateProduct=async(req,res)=>{
    const id=req.params['id'];
    res.end(`product id : ${id} update product`)
}

const deleteProduct=async(req,res)=>{
    const id=req.params['id'];
    res.end(`product id : ${id} delete this product`)
}


module.exports={
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,


}