const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send(`"Access the url path /dashcommerce?user="putYourUser"&password="putYourPassword" to test the api. You will get a JSON response`)
});

app.get('/dashcommercetest', (req, res) => {
    res.json({mensagem: messageAuthentication(req, res)})
   
});

function messageAuthentication(req){
    const user = req.query.user;
    const  password = req.query.password;
   
    if (user === `"dashcommerce"` && password === `"chooseMe"`){
        return "My full name is Carlos Eduardo Miranda Roriz. I really want this job"
    }
        return "Wrong credentials"

};

app.listen(3000);