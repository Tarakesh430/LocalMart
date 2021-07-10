import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Shop from '../models/shopModel.js';
import Seller from '../models/sellerModel.js';

const shopRouter=express.Router();
shopRouter.get('/',expressAsyncHandler(async(req,res)=>{
    const shopsList=await Shop.find({});
    res.send(shopsList);
})
);
shopRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
    const shop=await Shop.findById(req.params.id);
    if(shop){
        const sellerInfo=await Seller.findById(shop.shopDetails);
        res.send(sellerInfo||"MissingData");
    }else{
        res.status(404).send({message:'Product Not Found'});
    }
}));
shopRouter.get('/findShops',expressAsyncHandler(async(req,res)=>{
    const sellersList=await Seller.find({address:req.body.address});
    //TODO
}));
shopRouter.get('/getProduct/:id',expressAsyncHandler(async(req,res)=>{
    const sellers=await Seller.find({});
    const reqSeller=(sellers.filter((x)=>{
        const {productList}=x;
        // console.log(productList)
        const isNotNull=productList.filter((y)=>{
            return y._id==req.params.id;
        });
        if(isNotNull.length>0)
        return true;
        return false;
    }));
    if(reqSeller.length>0){
        const {productList}=reqSeller[0];
        // res.send(reqSeller[0]);
        const productInfo=productList.filter((y)=>{
            return y._id==req.params.id;
        });
        res.send(productInfo[0]);
    }else{
        res.status(404).send({message:'Product Not Found'});
    }
    // res.send("good");
}));

export default shopRouter;