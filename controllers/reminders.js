const Reminders = require('../models/reminders');
const {Op} = require('sequelize');

const setReminder = async (req,res)=>{
try{
    let result = await Reminders.create(req.body)
    return  res.status(201).json(result)
}catch(e){
    return res.status(500).json(e)
}
    
}
const getReminder = async (req,res)=>{
    try{
        let query = {}
        if(!!req.query)
            query={where:{}}
        if(req.query.user)
            query.where={...query.where,user:req.query.user}
        if(req.query.after)
        query.where={...query.where,date:{[Op.gte]:new Date(parseInt(req.query.after))}}    
    
        let result = await Reminders.findAll(query)
        return res.status(200).json(result)
    }catch(e){
        return res.status(500).json(e)
    }
    
}
const getReminderById = async (req,res)=>{
    try{
        let result = await Reminders.findOne({where: {
            id:req.params.id
        }})
        if(!result)
            res.status(404)
            return res.status(200).json(result)
    }catch(e){
        return res.status(500).json(e)
    
}
}
const deleteReminder = async (req,res)=>{
    try{
        let result = await Reminders.destroy({
            where: {
                id:req.params.id
            }
          })
          if(!result)
            res.status(404)
        res.status(200).json(result)
    }catch(e){
        res.status(500).json(e)
    }
    
}
const updatePatch = async (req,res)=>{
    try{
        let result = await Reminders.update(req.body,{where:{id:req.params.id}})
        if(!result)
            res.status(404)
    
        res.status(200).json(result)
    }catch(e){
        res.status(500).json(e)
    }
    
}
const update = async (req,res)=>{
    try{
        let result = await Reminders.update(req.body,{where:{id:req.params.id}})
        if(!result)
            res.status(404)
        res.status(200).json(result)
    }catch(e){
        res.status(500).json(e)
    }
    
}
module.exports = {
    setReminder,
    getReminder,
    getReminderById,
    deleteReminder,
    updatePatch,
    update
}
