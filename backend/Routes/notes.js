const express = require('express');
const router = express.Router();
const fetchuser=require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');


// 1. Fetch All Note using GET  (/api/notes/fetchallnotes) Login Required
router.get('/fetchallnotes', fetchuser,async(req, res)=>{
    try{
        const note= await Note.find({user: req.user.id});
        res.json(note);  
    } catch (err) {
        res.status(500).send({ error: "Something is wrong" })
        console.log(err.message);
    } 
    })

// 2. Add Note using Post  (/api/notes/addnote) Login Required

router.post('/addnote',fetchuser,[
    body('description', 'description should be atleast 5 chars').isLength({ min: 5 }),
    body('title', 'title should be atleast 3 chars').isLength({ min: 3 }),
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try{
    const da= new Note({
        user:req.user.id,
        title: req.body.title,
        description:req.body.description,
        tag:req.body.tag
    });
    const x= await da.save();
    res.send(x);
} catch (err) {
    res.status(500).send({ error: "Something is wrong" })
    console.log(err.message);
}
})

// 3. Update Note using PUT  (/api/notes/updatenote) Login Required
router.put('/updatenote/:id',fetchuser,[
    body('description', 'description should be atleast 5 chars').isLength({ min: 5 }),
    body('title', 'title should be atleast 3 chars').isLength({ min: 3 }),
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //create a new object to store updated fields
    try {
    
    const {title,discription,tag}=req.body;
    let newNote={};
    if(title) newNote.title=title;
    if(discription) newNote.discription=discription;
    if(tag) newNote.tag=tag;

    //find note to be update from DB 
    let note= await Note.findById(req.params.id);
    
    if(!note){
        return res.status(404).send("Not found");
    }
    // if authtoken doesnot match with note's user id
    if(note.user.toString() !==req.user.id){
        return res.status(401).send("Access Denied");
    }

    note= await Note.findByIdAndUpdate(req.params.id,{$set: newNote},{new:true});
    res.json(note);
        
} catch (err) {
    res.status(500).send({ error: "Something is wrong" })
    console.log(err.message);
}
})

// 4. Delete Note using Delete  (/api/notes/deletenote) Login Required
router.delete('/deletenote/:id',fetchuser,async(req,res)=>{
    
    try {
    
    //find note to be update from DB 
    let note= await Note.findById(req.params.id);
    
    if(!note){
        return res.status(404).send("Not found");
    }
    // if authtoken doesnot match with note's user id
    if(note.user.toString() !==req.user.id){
        return res.status(401).send("Access Denied");
    }

    note= await Note.findByIdAndDelete(req.params.id);
    res.json({"success":"Deleted Successfully", "note": note});
        
} catch (err) {
    res.status(500).send({ error: "Something is wrong" })
    console.log(err.message);
}
})

module.exports= router;

