const { Router } = require('express');
const router = Router();
const { TypeD } = require('../db.js');

router.get('/', async function (req, res) {

    const arr = [ "Gluten Free", "Ketogenic", "Vegetarian", "Lacto Ovo Vegetarian", "Pescetarian", "Paleo", "Primal", "Whole30" ]
    
    const a = await TypeD.findAll({})    
        if(a==false){
            for (let i = 0; i < arr.length; i++) {
                var element = arr[i];
                    await TypeD.create({
                        name: element,
                })
            }}
    const Types = await TypeD.findAll();
       res.json(Types);
    })

module.exports = router;
