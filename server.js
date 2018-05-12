const express = require('express');
const app  = express ();
const bodyparser = require ('body-parser');
const es =require ('./routes/empservice');

app.set('port', 3000);

app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extend:false}));
app.use(bodyparser.json());


app.use("/rest/es", es);


app.listen(app.get('port'), () => {
    console.log('server');
    });



