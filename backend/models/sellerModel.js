import mongoose from 'mongoose';

const sellerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:Number,reqired:true,unique:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,deafault:false,required:true},
    prdoudctList:[{ name : {type : String,required:true,unique:true,},
        image:{type:String,required:true},
        brand:{type:String,required:true},
        category:{type:String,required:true},
        description:{type:String,required:true},
        price:{type:Number,required:true},
        countInStock:{type:Number,required:true} 
    }],
    address:{type:String,required:true},
},{
  timestamps:true,
}
);

const Seller=mongoose.model("Seller",sellerSchema);
export default Seller;