const express = require('express');
const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken')
const app = express();

const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const User = require('./models/users');
const Admin = require('./models/admin');
const Dish = require('./models/dish');
const Status = require('./models/status');


//Set up default mongoose connection
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

app.use(express.static('uploads'));

// add user in collections from FE
app.post('/addUser', (req, res) => {
    console.log('users added from FE', req.body);
    const user = new User({
        fName: req.body.fName,
        lName: req.body.lName,
        adress: req.body.adress,
        email: req.body.email,
        pwd: req.body.pwd,
        confirmPwd: req.body.confirmPwd,
        tel: req.body.tel,
        mfCompany: req.body.mfCompany,
        faxCompany: req.body.faxCompany,
        domainCompany: req.body.domainCompany,
        expChef: req.body.expChef,
        specialityChef: req.body.specialityChef,
        userType: req.body.userType


    });
    user.save((error, users) => {
        if (error) {
            console.log(error);
        }
        else {
            let payload = { subject: users._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({ token });
        }
    })
});

// add admin in collections from FE
app.post('/addAdmin', (req, res) => {
    console.log('admins added from FE', req.body);
    const admin = new Admin({
        fullName: req.body.fullName,
        emailAdmin: req.body.emailAdmin,
        userAdmin: req.body.userAdmin,
        pwdAdmin: req.body.pwdAdmin,
        confPwdAdmin: req.body.confPwdAdmin

    });
    admin.save((error, admin) => {
        if (error) {
            console.log(error);
        }
        else {
            let payload = { subject: admin._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({ token });
        }
    })
});


/**
 * UPDATE ONE BY ID
 * Patch attributes for a model instance and persist it into the data source.
 */
// finded Dishs
app.get('/allDishs', (req, res) => {
    Dish.find((err, findedDish) => {
        console.log('All Dishs', findedDish);
        if (err) {
            console.log('error', err);
        }
        res.status(200).json({
            message: 'Here all Dishs',
            dish: findedDish
        })
    })
})


app.post('/addDish', multer({ storage: storage }).single('img'), (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    const dish = new Dish({
        name: req.body.name,
        price: req.body.price,
        ingredient: req.body.ingredient,
        calorie: req.body.calorie,
        img: url + ('/images/' + req.file.filename),
        description: req.body.description,
        userId: req.body.userId,
        status: Status.NEW
    });
    dish.save();
    res.status(200).json({
        message: "dish added successfuly"
    })
});
// Update Dishs
app.put('/editDish/:id', multer({ storage: storage }).single('img'), (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    if (!req.body) {

        return res.status(200).send({

            message: 'Data To Update can not empty!'

        });

    }

    const id = req.params.id;
    console.log('source image', req.body.img);
    if (req.file && req.file.filename) {
        req.body.img = url + ('/images/' + req.file.filename);
    }

    Dish.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(200).send({
                    message: `Cannot Update Dish with id=${id}, May be dish wa not found!`
                });
            }
            else res.send({
                message: "Dish was Update succesfully"
            })
            /* .catch(err=>{
                 res.status(500).send({
                     message:'error update dish id='+ id})
             })*/
        })

        ;
})
// Delete Dish
app.delete('/deleteDish/:id', (req, res) => {
    console.log('delete dish by ID', req.params._id);
    Dish.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                console.log('result', result);
                res.status(200).json({
                    message: 'Dish deleted successfully'
                });
            }
        }
    );
});
//  Finded Dish By Id
app.get('/allDishs/:id', (req, res) => {
    console.log('this is my id', req.params.id);
    Dish.findOne({ _id: req.params.id }).then(
        dish => {
            console.log('Finded Dish', dish);
            res.status(200).json({
                message: 'this is the dish',
                dish: dish
            })
        }
    )
})


//  Finded all dishes by User Id
app.get('/allUserDishs/:userId', (req, res) => {
    console.log('this is my userId', req.params.userId);
    Dish.find({ userId: req.params.userId }).then(
        dish => {
            console.log('Finded Dish', dish);
            res.status(200).json({
                message: 'this is the dish',
                dish: dish
            })
        }
    )
})


app.put('/editDish/:id', (req, res) => {
    console.log('Update Dish By ID', req.params.id);
    Dish.findByIdAndUpdate(
        // the id of the item to find
        req.params.id,

        // the change to be made. Mongoose will smartly combine your existing 
        // document with this change, which allows for partial updates too
        req.body,

        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        { new: true },

        // the callback function
        (err, dish) => {
            // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(dish);
        }
    );
})



app.get('/allUser', (req, res) => {
    User.find((err, findedUser) => {
        console.log('All Users', findedUser);
        if (err) {
            console.log('error', err);
        }
        res.status(200).json({
            message: 'Here all Users',
            users: findedUser
        })
    })
})


app.get('/allDishs', (req, res) => {
    Dish.find((err, findedDish) => {
        console.log('All Dishs', findedDish);
        if (err) {
            console.log('error', err);
        }
        res.status(200).json({
            message: 'Here all Dishs',
            dish: findedDish
        })
    })
})
app.post('/addDish', multer({ storage: storage }).single('img'), (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    const dish = new Dish({
        name: req.body.name,
        price: req.body.price,
        ingredient: req.body.ingredient,
        calorie: req.body.calorie,
        img: url + ('/images/' + req.file.filename),
        description: req.body.description,
        userId: req.body.userId,
        status: Status.NEW
    });
    dish.save();
    res.status(200).json({
        message: "dish added successfuly"
    })
});

app.get('/allDishs/:id', (req, res) => {
    console.log('this is my id', req.params.id);
    Dish.findOne({ _id: req.params.id }).then(
        dish => {
            console.log('Finded Dish', dish);
            res.status(200).json({
                message: 'this is the dish',
                dish: dish
            })
        }
    )
})
// Fided All User
app.get('/allUser/:id', (req, res) => {
    console.log('this is my id', req.params.id);
    User.findOne({ _id: req.params.id }).then(
        user => {
            console.log('finded User', user);
            res.status(200).json({
                message: 'this is User',
                users: user
            });
        }
    )
})


app.delete('/deleteDish/:id', (req, res) => {
    console.log('delete dish by ID', req.params.id);
    Dish.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                console.log('result', result);
                res.status(200).json({
                    message: 'Dish deleted successfully'
                });
            }
        }
    );
});
app.delete('/deleteUser/:id', (req, res) => {
    console.log('delet User by id', req.params.id);
    User.deleteOne({ _id: req.params.id }).then(
        resul => {
            if (resul) {
                console.log('resul', resul);
                res.status(200).json({
                    message: ' user deleted successfully'
                })
            }
        }
    )
})

app.get('/allUser', (req, res) => {
    console.log(('well received in BE'));
    User.find((err, documents) => {
        console.log('All user', documents);
        res.status(200).json({
            message: 'Here all Users',
            users: documents,

        })
    });
})
/******* Get All Admin******** */
app.get('/allAdmin', (req, res) => {
    console.log(('well received in BE'));
    Admin.find((err, documents) => {
        console.log('All Admin', documents);
        res.status(200).json({
            message: 'Here all Admin',
            admin: documents,

        })
    });
})



// search user by email from collections: (req.body.email received from FE)
app.post("/addLogin", (req, res) => {
    User.findOne({ email: req.body.emailLogin })
        .then((data) => {
            console.log("data", data);
            if (!data) {
                res.status(200).json({
                    message: "Authentification Problem",
                });
            }
            return bcrypt.compare(req.body.pswLogin, data.pwd);
        })
        .then((result) => {
            if (!result) {
                res.status(200).json({
                    message: "0",
                });
            }
            User.findOne({ email: req.body.emailLogin }).then((data) => {


                let payload = { subject: data._id }
                let token = jwt.sign(payload, 'secretKey', { expiresIn: '3h' })
                res.status(200).json({ token, userType: data.userType, userId :data._id, message: 'User added successfuly' });



            });

        });
});

/******************  search admin by email from collections: (req.body.email received from FE)********************* */


app.post("/addLoginAdmin", (req, res) => {
    Admin.findOne({ emailAdmin: req.body.emailLoginAdmin })
        .then((data) => {
            console.log("data", data);
            if (!data) {
                res.status(200).json({
                    message: "Authentification Problem",
                });
            }
            return bcrypt.compare(req.body.pwdLoginAdmin, data.pwdAdmin);
        })
        .then((result) => {
            if (!result) {
                res.status(200).json({
                    message: "0",
                });
            }
            Admin.findOne({ emailAdmin: req.body.emailLoginAdmin }).then((data) => {


                let payload = { subject: data._id }
                let token = jwt.sign(payload, 'secretKey', { expiresIn: '3h' })
                res.status(200).json({ token, admin: data.admin, message: '1' });

            });
        });

});


/******************  search admin by email from collections: (req.body.email received from FE)********************* */


app.post("/addLoginAdmin", (req, res) => {
    Admin.findOne({ emailAdmin: req.body.emailLoginAdmin })
        .then((data) => {
            console.log("data", data);
            if (!data) {
                res.status(200).json({
                    message: "Authentification Problem",
                });
            }
            return bcrypt.compare(req.body.pwdLoginAdmin, data.pwdAdmin);
        })
        .then((result) => {
            if (!result) {
                res.status(200).json({
                    message: "0",
                });
            }
            Admin.findOne({ emailAdmin: req.body.emailLoginAdmin }).then((data) => {
                res.status(200).json({
                    message: "1",
                    admin: data.admin
                });
            });

        });
});


app.get('/logoutAdmin', (req, res) => {
    console.log('delete admin', req.params._id);
    Admin.findByIdAndRemove(req.params._id, function (err) {
        if (err) res.send(err);
        res.status(200).json({ message: 'Admin Deleted!' });
    })
});




module.exports = app;
