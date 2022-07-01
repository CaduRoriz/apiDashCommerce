const express = require('express');

const app = express();


app.get('/dashcommercetest', (req, res) => {
    res.json({mensagem: messageAuthentication(req, res)})
});

app.get('*', (req,res) => {
    res.send('To test de authentication api go to path /dashcommercetest?user="putYourUser"&password="putYourPassWord"')
});

function messageAuthentication(req){
    const user = req.query.user;
    const  password = req.query.password;
   
    if ((user === `"dashcommerce"` && password === `"chooseMe"`) || (user === `dashcommerce` && password === `chooseMe`)){
        return "My full name is Carlos Eduardo Miranda Roriz. I really want this job"
    }
        return "Wrong credentials"
};

app.listen(3000);