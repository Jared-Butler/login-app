const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller')
const app = express();
app.use(bodyParser.json());



app.get('/api/health-check',ctrl.healthCheck );

app.post('/api/login',ctrl.login )


app.listen(1337, listening(1337));

function listening (portNum){
console.log(`listening on ${portNum}`)
}