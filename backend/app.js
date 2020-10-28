const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const users = require('./models/users');



mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/images', express.static(path.join('backend/images')));
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;
        cb(null, imgName);
    }
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});




app.post('/addConsumer', (req, res) => {
    console.log('consumers added from FE', req.body);
    const consumers = new users({
        fName: req.body.fName,
        lName: req.body.lName,
        adress:req.body.adress,
        email: req.body.email,
        pwd: req.body.pwd,
        confirmPwd: req.body.confirmPwd,
        tel:req.body.tel,
        
    });
    consumers.save()
});

app.post('/addCompany', (req, res) => {
    console.log('company added from FE', req.body);
    const companys = new company({
        nameCompany: req.body.nameCompany,
        mfCompany: req.body.mfCompany,
        adressCompany:req.body.adressCompany,
        emailCompany:req.body.emailCompany,
        pwdCompany: req.body.pwdCompany,
        confPwdCompany: req.body.confPwdCompany,
        telCompany:req.body.telCompany,
        faxCompany:req.body.faxCompany,
        domainCompany:req.body.domainCompany
        
    });
    companys.save()
});


app.post('/addChef', (req, res) => {
    console.log('chef added from FE', req.body);
    const chefs = new chef({
        firstNameChef: req.body.firstNameChef,
        lastNameChef: req.body.lastNameChef,
        adressChef:req.body.adressChef,
        emailChef: req.body.emailChef,
        expChef:req.body.expChef,
        pwdChef: req.body.pwdChef,
        confPwdChef: req.body.confPwdChef,
        specialityChef:req.body.specialityChef,
      
        
    });
    chefs.save()
});

   app.post('/addLogin',(req,res)=>{
    console.log(('Received consumer',req.body));
    users.findOne({email:req.body.emailLogin}).then(
        x=>{
            console.log('finded consumer',x);
            if(!x){
                res.status(404).json({
                    message:'0'
                });}
                else{
                    users.findOne({pwd:req.body.pswLogin}).then(
                        y=>{
                            if(!y){
                                res.status(200).json({
                                    message:'1'
                                });
                            }
                            else{
                                res.status(201).json({
                                    message:'2',
                                    users:y
                                })
                            }

                        }
                    )
                }
            }
        
    )

    
});
app.post('/addLogin',(req,res)=>{
    console.log(('Received company',req.body));
    users.findOne({emailCompany:req.body.emailLogin}).then(
        data1=>{
            console.log('finded company',data1);
            if(!data1){
                res.status(404).json({
                    message:'0'
                });}
                else{
                    users.findOne({pwdCompany:req.body.pswLogin}).then(
                        datapsw=>{
                            if(!datapsw){
                                res.status(200).json({
                                    message:'1'
                                });
                            }
                            else{
                                res.status(201).json({
                                    message:'2',
                                    users:datapsw
                                })
                            }

                        }
                    )
                }
            }
        
    )

    
})



app.post('/addLogin',(req,res)=>{
    console.log(('Received chef',req.body));
    users.findOne({emailChef:req.body.emailLogin}).then(
        data2=>{
            console.log('finded chef',data2);
            if(!data2){
                res.status(404).json({
                    message:'0'
                });}
                else{
                    users.findOne({pwdChef:req.body.pswLogin}).then(
                        datapsd=>{
                            if(!datapsd){
                                res.status(200).json({
                                    message:'1'
                                });
                            }
                            else{
                                res.status(201).json({
                                    message:'2',
                                    users:datapsd
                                })
                            }

                        }
                    )
                }
            }
        
    )

    
})




















module.exports = app;
