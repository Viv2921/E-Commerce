const express=require('express')
const mongoose=require('mongoose')

const courses={
        title:String,
        subtitle:String
        

}

module.exports=mongoose.model("courses",courses); 
