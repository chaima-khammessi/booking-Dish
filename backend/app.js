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
const Menu = require('./models/menu');
const galleryRestau = require('./models/galleryRestau');
const menu = require('./models/menu');
const Cart = require('./models/cart')


//Set up default mongoose connection
mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
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
        //TODO KEEP ONLY FILE NAME (REMOVE THE EXTENSION FROM ORIGINAL FILENAME)
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '.' + extension;
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
        userType: req.body.userType,
        status: Status.NEW,
        verif: req.body.status
    });
    ++user.save((error, users) => {
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
// add Profile User
app.post('/addUserProfile', multer({ storage: storage }).single('img'), (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    const filename = Boolean(req.file && req.file.filename) ? url + ('/images/' + req.file.filename) : "";
    const user = new User({
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        tel: req.body.tel,
        img: filename,
        adress: req.body.adress,
        userId: req.body.userId,
        specialityChef: req.body.specialityChef,
        expChef: req.body.expChef,
        nationality: req.body.nationality,
        restaurant: req.body.restaurant,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin,
        status: Status.NEW,
        verif: req.body.status
    });

    user.save();
    res.status(200).json({
        message: "user Profile added successfuly"
    })
});

// add admin in collections from FE
app.post('/addAdmin', (req, res) => {
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

// finded Dishs
app.get('/allDishs', (req, res) => {
    Dish.find((err, findedDish) => {
        console.log('All Dishs', findedDish);
        if (err) {
            console.log('error', err);
        }
        res.status(200).json({
            message: 'Here all Dishs',
            dish: findedDish,

        })
    })
})

/****************Finded Menu *********/
app.get('/allMenu', (req, res) => {
    Menu.find((err, findedMenu) => {
        console.log('All menus', findedMenu);
        if (err) {
            console.log('error', err);
        }
        res.status(200).json({
            message: 'Here all menus',
            menu: findedMenu,

        })
    })
})

/***************Verify dish *************************** */
app.get('/getAllspecialDishs', (req, res) => {

    Dish.find({ verif: "SPECIAL" }, (err, findedDish) => {
        if (err) {
            console.log('error', err);
        }
        res.status(200).send(findedDish);
    })
})


/**************************Verify chef**************************************/

app.get('/allUserChef', (req, res) => {
    User.find({ userType: "chef" }, (err, findedUser) => {
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


/**************** Validate Dish for verify***********************/
app.get('/allVerifDishs', (req, res) => {

    Dish.find({ verif: "VALIDATED" }, (err, findedDish) => {
        if (err) {
            console.log('error', err);
        }
        res.status(200).send(findedDish);
    })
})
/**************** Validate Menu for verify***********************/
app.get('/allVerifMenus', (req, res) => {

    Menu.find({ verif: "VALIDATED" }, (err, findedMenu) => {
        if (err) {
            console.log('error', err);
        }
        res.status(200).send(findedMenu);
    })
})

/*****************Validate Menu for verif Limeted Home************/
app.get('/allVerifMenusHome', (req, res) =>

    Menu.find({ verif: "VALIDATED" }, (err, findedMenu) => {
        if (err) {
            console.log('error', err);
        }
        res.status(200).send(findedMenu)
    }).sort({ "_id": -1 }).limit(3)

)
/**************** Validate Dish for verify***********************/
app.get('/allVerifDishsHome', (req, res) => {

    Dish.find({ verif: "VALIDATED" }, (err, findedDish) => {
        if (err) {
            console.log('error', err);
        }
        res.status(200).send(findedDish);
    }).sort({ "_id": -1 }).limit(3)
})


/**************** Validate Gallery for verify***********************/
app.get('/allVerifGallerysHome', (req, res) => {

    galleryRestau.find({ verif: "VALIDATED" }, (err, findedGallery) => {
        if (err) {
            console.log('error', err);
        }
        res.status(200).send(findedGallery);
    }).sort({ "_id": -1 }).limit(8)
})

/**************** Validate User for verify***********************/
app.get('/allVerifChefs', (req, res) => {

    User.find({ verif: "VALIDATED" }, (err, findedChef) => {
        if (err) {
            console.log('error', err);
        }
        res.status(200).send(findedChef);
    })
})

/**************** Validate Gallery for verify***********************/
app.get('/allVerifGallerys', (req, res) => {

    galleryRestau.find({ verif: "VALIDATED" }, (err, findedGallery) => {
        if (err) {
            console.log('error', err);
        }
        res.status(200).send(findedGallery);
    })
})

/**************** Validate Chef for verify Home***********************/
app.get('/allVerifChefProfile', (req, res) => {

    User.find({ verif: "VALIDATED" }, (err, findedChef) => {
        if (err) {
            console.log('error', err);
        }
        res.status(200).send(findedChef);
    }).sort({ "_id": -1 }).limit(3)
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
        category: req.body.category,
        userId: req.body.userId,
        status: Status.NEW,
        verif: req.body.status
    });
    dish.save();
    res.status(200).json({
        message: "dish added successfuly"
    })
});

//Add Menu

app.post('/addMenu', multer({ storage: storage }).single('img'), (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    const menu = new Menu({
        name: req.body.name,
        category: req.body.category,
        ingredient: req.body.ingredient,
        price: req.body.price,
        img: url + ('/images/' + req.file.filename),
        userId: req.body.userId,
        status: Status.NEW,
        verif: req.body.status
    });
    menu.save();
    res.status(200).json({
        message: "menu added successful"
    })
});


// Update Menu
app.put('/editMenu/:id', multer({ storage: storage }).single('img'), (req, res) => {
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

    Menu.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(200).send({
                    message: `Cannot Update Menu with id=${id}, May be menu wa not found!`
                });
            }
            else res.send({
                message: "Menu was Update succesfully"
            })

        });
})
// ADD Photo for Gallery

app.post('/addGallery', multer({ storage: storage }).single('img'), (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    const galleryRest = new galleryRestau({
        name: req.body.name,
        adress: req.body.adress,
        img: url + ('/images/' + req.file.filename),
        userId: req.body.userId,
        status: Status.NEW,
        verif: req.body.status
    });
    galleryRest.save();
    res.status(200).json({
        message: "Gallery added successful"
    })
})

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

        })

        ;
})

// Update Gallery By Id 

app.put('/editGalleryRestau/:id', multer({ storage: storage }).single('img'), (req, res) => {
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
    galleryRestau.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(200).send({
                    message: `Cannot Update Gallery with id=${id}, May be gallery wa not found!`
                });
            }
            else res.send({
                message: "Gallery was Update succesfully"
            })

        });
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

// Deleted Menu

app.delete('/deleteMenu/:id', (req, res) => {
    console.log('delete menu by ID', req.params.id);
    Menu.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                console.log('result', result);
                res.status(200).json({
                    message: 'Menu deleted successfully'
                });
            }
        }
    );
});

//Delete Gallery By Id
app.delete('/deleteGalleryResatu/:id', (req, res) => {
    console.log('delete dish by ID', req.params._id);
    galleryRestau.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                console.log('result', result);
                res.status(200).json({
                    message: 'Gallery deleted successfully'
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
//  Finded Menu By Id
app.get('/allMenu/:id', (req, res) => {
    console.log('this is my id', req.params.id);
    Menu.findOne({ _id: req.params.id }).then(
        menu => {
            console.log('Finded Menu', menu);
            res.status(200).json({
                message: 'this is the dish',
                menu: menu
            })

        }
    )
})

//Fided Dish By Id
app.get('/allGalleryRestau/:id', (req, res) => {
    console.log('this is my id', req.params.id);
    galleryRestau.findOne({ _id: req.params.id }).then(
        gallery => {
            console.log('Finded Gallery', gallery);
            res.status(200).json({
                message: 'this is the Gallery',
                gallery: gallery
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
//  Finded all menus by User Id
app.get('/allUserMenus/:userId', (req, res) => {
    console.log('this is my userId', req.params.userId);
    Menu.find({ userId: req.params.userId }).then(
        menu => {
            console.log('Finded Menu', menu);
            res.status(200).json({
                message: 'this is the menu',
                menu: menu
            })
        }
    )
})

// finded user by Id
app.get('/allUserId/:userId', (req, res) => {
    console.log('this is my userId', req.params.userId);
    User.find({ userId: req.params.userId }).then(
        user => {
            console.log('Finded User', user);
            res.status(200).json({
                message: 'this is the user',
                users: user
            })
        }
    )
})

//finded All photo Gallery By Id
app.get('/allUserGallery/:userId', (req, res) => {
    console.log('this is my userId', req.params.userId);
    galleryRestau.find({ userId: req.params.userId }).then(
        gallery => {
            console.log('Finded gallery', gallery);
            res.status(200).json({
                message: 'this is the gallery',
                gallery: gallery
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
// Update Menu
app.put('/editMenu/:id', (req, res) => {
    console.log('Update Menu By ID', req.params.id);
    Menu.findByIdAndUpdate(
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
            return res.send(menu);
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

//finded all dishs
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

//finded all Gallery
app.get('/allGalleryRestau', (req, res) => {
    galleryRestau.find((err, findedGallery) => {
        console.log('All Gallerys', findedGallery);
        if (err) {
            console.log('error', err);
        }
        res.status(200).json({
            message: 'Here all Gallerys',
            gallery: findedGallery
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
        category: req.body.category,
        userId: req.body.userId,
        status: Status.NEW,
        verif: req.body.status

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
// Update Dishs
app.put('/editUserId/:id', multer({ storage: storage }).single('img'), (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    if (!req.body) {

        return res.status(200).send({

            message: 'Data To Update can not empty!'

        });
    }

    const id = req.params.id;

    if (req.file && req.file.filename) {
        req.body.img = url + ('/images/' + req.file.filename);
    }
    console.log('source image', req.body.img);

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(200).send({
                    message: `Cannot Update User with id=${id}, May be User wa not found!`
                });
            }
            else res.send({
                message: "User was Update succesfully"
            })

        });
})
// added dish to cart
app.post('/addDishToCart', (req, res) => {
    const {dishId, quantity, name, price } = req.body;

    const userId = req.body.userId; //TODO: the logged in user id
  
    try {
      let cart =  Cart.findOne({ userId });
  
      if (cart) {
        //cart exists for user
        let itemIndex = cart.dishes.findIndex(p => p.dishId == dishId);
  
        if (itemIndex > -1) {
          //product exists in the cart, update the quantity
          let dishItem = cart.dishes[itemIndex];
          dishItem.quantity = quantity;
          cart.dishes[itemIndex] = dishItem;
        } else {
          //product does not exists in cart, add new item
          cart.dishes.push({ dishId, quantity, name, price });
        }
        cart = cart.save();
        return res.status(201).send(cart);
      } else {
        //no cart for user, create new cart
        const newCart = Cart.create({
          userId,
          dishes: [{ dishId, quantity, name, price }]
        });
  
        return res.status(201).send(newCart)
      }
    } catch (err) {
      console.log(err);
      res.status(201).send("Something went wrong");
    }
   
}); 
   
/*app.post('addDishToCart', (res,req)=>
document =  {
    userId: req.body.userId,
    dishId: mongodb.ObjectID(req.body.dishId),
    quantity: req.body.quantity 
  },

 // repository.createOne(req, res, 'cart', document)
  const newCart = Cart.create({
      req,res, 'cart , document
  })

)*/

 

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
// Delete User By Id
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
// Finded User
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
                res.status(200).json({ token, userType: data.userType, userId: data._id, message: 'User added successfuly' });



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
