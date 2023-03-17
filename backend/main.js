const express=require('express')
 const sch=require('./models/users.js')  
 const courses=require('./models/courses.js')
 const cart=require('./models/cart.js')
const app=express()
const cors = require('cors');
const corsOptions ={
    origin:'http://127.0.0.1:5500', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
const path=require('path');
app.set('public',path.join(__dirname,'public'))



 const mongoose=require('mongoose') 
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/pusers',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

var db=mongoose.connection;
db.on('error',()=>console.log('error in connecting to database'))
db.once('open',()=>console.log('connection success'))

//post 

app.post('/users',async(req,res)=>{
    const data=new sch({ 
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }) 
    const val=await data.save(); 
    res.send(data);
    /* res.json(val);  */
  })

  // login verification
  app.post('/login',async(req,res)=>{
    try{
      const user = await sch.findOne({username:req.body.username});
      !user && res.status(404).json({message:"Invalid email or password"});

      if (user.password==req.body.password){
      //console.log("loggedin")
        res.status(200).json(user)
      }
      else{
        res.status(400).json({message:"Invalid password"});
      }
    }
    catch(err){
      console.log(err)
    }

  

  

    // const val=await data.save(); 
    // res.send(data);
    /* res.json(val);  */
  })

  

  app.get('/courses',async(req,res)=>{
    try{
      const id=await courses.find();
      res.status(200);
      res.send(id);

    }catch(error){
      res.status(500).send(error);
    }
  })
  // app.get('/courses/:id',async(req,res)=>{
  //   try{
  //     const id=await courses.find();
  //     res.status(200);
  //     res.send(id);

  //   }catch(error){
  //     res.status(500).send(error);
  //   }
  // })
  app.get('/:id', async(req,res) => {
    try{
           const id = await courses.findById(req.params.id)
           res.json(id)
    }catch(err){
        res.send('Error ' + err)
    }
})


  app.post('/courses',async(req,res)=>{
    const data=new courses({ 
      id:req.body.id,
        number: req.body.number,
        price: req.body.price
    }) 
    const val=await data.save(); 
    res.send(data);
    /* res.json(val);  */
  })
  

  //get
  app.get('/users',async(req,res)=>{
    try{
      const posts=await sch.find();
      res.status(200).send(posts);
    } catch(error){
      res.status(500).send(error);
    }
  })



  



  //patch
  app.patch('/users/:id',async(req,res)=>{

    let upname=req.body.name;
    let upmail=req.body.upmail;
    let uppassword=req.body.password;
    try{
      const updates=await sch.findByIdAndUpdate(req.params.id,req.body,{new:true})
      if(!updates){
        return res.status(404).send();
      }
      res.status(200).send(updates);
    }catch(error){
      res.status(500).send(error)
    }
  })

  //delete

  app.delete('/users/:id', async (req, res) => {
    try {
        const updates = await sch.findByIdAndDelete(req.params.id);
        res.send('deleted')
        if (!updates) {
            return res.status(404).send();
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
})
  //cart

  app.get('/cart',async(req,res)=>{
    try{
      const posts=await cart.find();
      res.status(200).send(posts);
    } catch(error){
      res.status(500).send(error);
    }
  })
  app.post('/cart',async(req,res)=>{
    const data=new courses({ 
      title:req.body.title,
      subtitle:req.body.subtitle
    }) 
    const val=await data.save(); 
    res.send(data);
    /* res.json(val);  */
  })




app.listen(1500,()=>{
    console.log('port 1500')
})