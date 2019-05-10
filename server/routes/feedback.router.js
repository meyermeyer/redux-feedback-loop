const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req,res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error);
        res.sendStatus(500); 
    });
});

router.post('/', (req,res) => {
    console.log(req.body);
    
    console.log('POST /feedback');
    let query = `INSERT INTO "feedback" ("feeling","understanding","support", "comments") VALUES ($1,$2,$3,$4);`;
    pool.query(query ,[req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then(response => {
        console.log('back from POST /feedback', response);
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('error in POST /feedback', error);
    })
});
    
        


module.exports = router;
