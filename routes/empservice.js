const express = require ('express');
const router = express.Router();
var ed=require('./dao/empdo');
var MongoClient = require ('mongodd').MongoClient;
var url = 'mongodb://localhost:27017/mercury';

router.get('/emp',(req, res) =>{    /* get请求 （req,res）是promise */

    MongoClient.connect(uri, (err, db)=>{        /* (err,db) is a promise(one object call); 3种状态:fullfill-reject-pending。  j.s. 是单线程 ajects */

        ed.getAllEmp(db,(result)=> {
            e
            res.json(result);
            db.close();
        })
    })
})

router.get('/emp/:name', (req, res) =>{  /* router is meta database,  */
    const name  =req.params.name;
    MongoClient.connect(uri,(err,db)=>{
        ed.getOneEmp(db, name, (result)=>{
            res.json(result);
            db.close();

        })
        })
    })

module.exports = router;