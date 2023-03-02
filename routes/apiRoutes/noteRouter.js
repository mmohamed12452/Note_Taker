const router = require("express").Router();

let data = require("../../db/db.json");

const {v4:uuidv4} = require("uuid");

const fs = require("fs");
const path = require("path");


//getting the notes route= api/notes
router.get("/notes", (res, req)=>{
    console.log({data});
    res.json(data);
});

//delete a note using its id route= /api/notes/:id
router.delete("/notes/:id", (res, req)=>
{
    data = data.filter((el) => el.id !== req.params.id);
    fs.writeFile(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify(data),
        function(err){
            if(err){
                res.statusCode(404).json({error:err});
            }

            res.json(data);
        }
    )
});


//post the data
router.post("/note", (res, freq)=>{
    const newNote = {...req.body, id:uuidv4()};
    data.unshift(newNote);
    fs.writeFile(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify(data),
        function(err){
            if(err){
                res.statusCode(404).json({error:err});
            }

            res.json(data);
        }
    )


});

module.export = router;


