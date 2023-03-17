const express=require('express')
const mongoose=require('mongoose')

const cart={
    title:String,
    subtitle:String
}

module.exports=mongoose.model("cart",cart); 