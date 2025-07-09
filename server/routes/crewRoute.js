const express = require('express');
const Crew = require('../models/Crew');

const router = express.Router();

router.post('/', async (req, res) =>{
    try{
    const {name, supervisor, totalEmployees} = req.body;

    const crew = new Crew({name, supervisor, totalEmployees});

    const savedCrew = await crew.save();

    res.status(201).json(savedCrew);
    }catch(error){
        res.status(500).json({message: "Error Creating Crew", error: error.message});
    }

});

router.get('/', async (req, res) =>{
    try{
        const crews = await Crew.find();
        res.json(crews);
    }catch(error){
        res.status(500).json({message: 'Error Finding crew'})
    }
    }
)

router.patch('/:id', async (req, res) =>{
    try{
        const {totalEmployees} = req.body;
        const updatedCrew = await Crew.findByIdAndUpdate(
            req.params.id,
            { totalEmployees},
            {new: true}
        );
        res.json(updatedCrew);
    } catch (error){
        res.status(500).json({message: "Failed to update Crew", error: error.message});
    }
});


module.exports = router;