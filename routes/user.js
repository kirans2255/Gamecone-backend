const express = require('express');
const router = express.Router();
const passport = require('passport')
const user = require('../controller/userController')
const authuser = require('../middleware/user');

router.post('/signup', user.Signup)

router.get('/home',user.home)

router.post('/login', user.Login)

router.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));
router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: "/success",
        failureRedirect: "/failure",
    })
);
router.get("/success", user.successGoogleLogin);
router.get("/failure", user.failureGooglelogin);

router.post('/otplogin',user.otpLogin)

router.get('/single/:id',user.singlepage)

router.get('/user',authuser,user.user)

//cart
router.post('/addcart',authuser,user.cartadd)

router.get('/cart',authuser,user.getcart)

router.delete('/deletecart',authuser,user.deletecart)


//wishlist
router.get('/wishlist',authuser,user.getwishlist)

router.post('/addwishlist',authuser,user.wishlistadd)

router.delete('/deletewishlist',authuser,user.deletewishlist)

router.get('/logout',user.handleLogout)


module.exports = router 