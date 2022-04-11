const express = require('express');
const router = express.Router();
const Client = require('../models/Clients')

router.get('/', (req, res) =>{
    res.send('Pagina clientes');
});

router.post('/', async (req,res) =>{
    
    let client = await new Client({
        name: req.body.name,
        description: req.body.description,
        address: {
            street: req.body.address.street,
            number: req.body.address.number,
            floor: req.body.address.floor,
            apartment: req.body.address.apartment,
            department: req.body.address.department,
            city: req.body.address.city,
            province: req.body.address.province
        },
        relevance: req.body.relevance, 
        enabled: req.body.enabled
    }).save()
     .then( data => {
         res.status(200).json(data);
     })
     .catch(err => {
         res.json({message: err});
     });
});

module.exports = router;