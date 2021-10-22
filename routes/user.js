const express=require('express')
const router=express.Router()
const userList=require('../models/User')

// Add user
// public
router.post('/add_user',(req,res)=>{
    const {name,email,phone,post}=req.body
    const newUser= new userList({name,email,phone,post})
    newUser.save()
    .then(user=>res.send(user))
    .catch(err=>console.error(err))
})


// get all users
// public
router.get('/all_users',(req,res)=>{
    userList.find()
    .then(data=>res.send(data))
    .catch(err=>console.error(err))
})


// edit user by id
// public
router.put('/edit_user/:_id',(req,res)=>{
    const {_id}=req.params
    userList.findOneAndUpdate({_id},{$set:{...req.body}})    
    .then(data=>res.send(data))
    .catch(err=>console.error(err))
})

// delete user by id
// public
router.delete('/delete_user/:_id',(req,res)=>{
    const {_id}=req.params
    userList.deleteOne({_id})
    .then(data=>res.send(data))
    .catch(err=>console.error(err))
})

module.exports=router