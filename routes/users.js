const express = require('express');
const router = express.Router();
const fs = require('fs');
const Post = require('../models/Post');
const User = require('../models/User');
const { verifyTokenFromCookie, verifyAdmin } = require('../verifyToken');
const bcrypt = require('bcryptjs');




router.get('/getusers', verifyTokenFromCookie, verifyAdmin, async (req, res) => {
    
    const users = await User.find({}).select('-password -date -__v ');
    res.status(200).json(users);
})


router.patch('/edit/:userId', verifyTokenFromCookie, verifyAdmin, async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.userId, req.body);
        res.status(200).json({message :'Пользователь отредактирован'});
    } catch (er) {
        res.status(400).json({message :'Не смог отредактировать. Попробуйте заново.'});
    }

})

router.patch('/passwordreset/:userId', verifyTokenFromCookie, verifyAdmin, async (req, res) => {
    try {
        const newpassword = '12345678';
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(newpassword, salt);
        
        await User.findByIdAndUpdate(req.params.userId, {password});
        
      
        res.status(200).json({message :'Пароль изменен на 12345678'});
    } catch (er) {
        res.status(400).json({message :'Не смог отредактировать. Попробуйте заново.'+ er});
    }

})





module.exports = router;