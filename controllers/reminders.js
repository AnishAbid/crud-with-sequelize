const Reminders = require('../models/reminders');
const {Op} = require('sequelize');

const setReminder = async (req,res)=>{

    let result = await Reminders.create(req.body)
    res.status(201).json(result)
}
const getReminder = async (req,res)=>{
    let query = {}
    if(!!req.query)
        query={where:{}}
    if(req.query.user)
        query.where={...query.where,user:req.query.user}
    if(req.query.after)
    query.where={...query.where,date:{[Op.gte]:new Date(parseInt(req.query.after))}}    

    let result = await Reminders.findAll(query)
    res.status(200).json(result)
}
const getReminderById = async (req,res)=>{
    let result = await Reminders.findOne({where: {
        id:req.params.id
    }})
    if(!result)
        res.status(404)
    res.status(200).json(result)
}
const deleteReminder = async (req,res)=>{
    let result = await Reminders.destroy({
        where: {
            id:req.params.id
        }
      })
      if(!result)
        res.status(404)
    res.status(200).json(result)
}
const updatePatch = async (req,res)=>{
    let result = await Reminders.update(req.body,{where:{id:req.params.id}})
    if(!result)
        res.status(404)

    res.status(200).json(result)
}
const update = async (req,res)=>{
    let result = await Reminders.update(req.body,{where:{id:req.params.id}})
    if(!result)
        res.status(404)
    res.status(200).json(result)
}
module.exports = {
    setReminder,
    getReminder,
    getReminderById,
    deleteReminder,
    updatePatch,
    update
}
