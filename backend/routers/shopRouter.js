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
        if(sellerInfo)
        res.send(sellerInfo);
        else
        res.status(404).send({message:"Invalid Shop Details Found"})
    }else{
        res.status(404).send({message:'Shop Not Found'});
    }
}));
shopRouter.get('/findShops',expressAsyncHandler(async(req,res)=>{
    const sellersList=await Seller.find({address:req.body.address});
    //TODO
}));


export default shopRouter;