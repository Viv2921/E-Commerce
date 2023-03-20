const express=require('express')
const mongoose=require('mongoose')

const cart={
    id:String,
    title:String,
    subtitle:String,
    }
   


module.exports=mongoose.model("car",cart); 