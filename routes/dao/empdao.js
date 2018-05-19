var ed = [];

ed.getAllEmp = (db, callback) =>{
    var collection =db.collection('emp').find();
    var array =[];
    collection.each(function (err,doc) {
        if(doc !==null){
            array.push(doc);
        }else {callback(array);
        }
    })
}

ed.getOneEmp =(db, name, callback)=>{
    const collection = db.collection('emp').find({name:name});
    collection.each(function (err,doc) {
        if(doc !== null){
            callback(doc);
        }

    })
}

//增、删、改、查--dao文件。
ed.saveOneEmp =(db, emp, callback) => {
    const collection =db.collection('emp');
    collection.insertOne (emp,(err, result)=>{
        callback(result);
    })
}


ed.updateOneEmp = (db, emp, callback) => {
    const collection =db.collection('emp');
    collection.replaceOne({name: emp.name}, emp, (err,result) => {
        callback(result);
    } )
}

ed.updateOneEmp = (db, name, callback) => {
    const collection =db.collection('emp');
    collection.deleteOne({name: name}, (err,result) => {
        callback(result);
    } )
}


module.exports = ed;