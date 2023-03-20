 //schema 
const express=require('express')
const mongoose=require('mongoose')
const sch={
    username:{type:String, unique:true,required:true},
    email:String,
    password:String,
}

 /* const monmodel=mongoose.model("usersses",sch)    */
 
 module.exports=mongoose.model("sch",sch); 

 