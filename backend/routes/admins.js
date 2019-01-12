const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const Admin = require('../models/admin')

const JWT_KEY = process.env.JWT_KEY || 'test123@#'

module.exports = function (router) {

    router.post("/admin_token", function (req, res) {
        if(req.body.auth && req.body.auth.username && req.body.auth.password){
            Admin.findOne({ username: req.body.auth.username }, (err, user) => {

                if (err) throw err;
    
                if (!user) {
                    res.json({ 'response': "Admin does not exist", 'res': false });
                } else {
    
                    bcrypt.compare(req.body.auth.password, user.password, function (err, isMatch) {
                        if (err) throw err;
    
                        if (isMatch) {
    
                            const token = jwt.sign(user.toJSON(),JWT_KEY, {
                                expiresIn: 604800 // 1 week
                            });
    
                            res.json({ 'jwt': token });
                        }
                        else {
                            res.json({ 'response': "Invalid Password", 'res': false });
                        }
                    });
                }
            });
        }else{
            res.status(500).json({ 'response': "Something failed!", 'res': false });
        }
        
    })

    router.post("/admin_register", function (req, res) {
        if(req.body.user && req.body.user.name && req.body.user.username && req.body.user.password){
            
            Admin.find({username:req.body.user.username},function(err,users){

                var len = users.length;
        
                if(len == 0){
                    bcrypt.hash(req.body.user.password, null, null, function(err, hash) {
                        newAdmin = new Admin({
                            name:req.body.user.name,
                            username:req.body.user.username,
                            password:hash
                        });
                        newAdmin.save(function (err) {
                            res.json({"message":"Sucessfully Registered",
                            name:req.body.user.name,username:req.body.user.username});
                        });
                    });
                }else{
                    res.status(422).send({ error: 'User already Registered' })                
                }
            });
        }else{
            res.status(500).send({ error: 'Something failed!' })
        }
        
    })
}