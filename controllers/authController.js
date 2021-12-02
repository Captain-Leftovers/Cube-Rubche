const router = require('express').Router();
const authService = require('../services/authService');
router.get('/login', (req, res)=>{
    res.render('auth/login')
})



router.get('/register', (req,res)=>{
    res.render('auth/register');
})


router.post('/register', async (req,res)=>{
    let {username, password, repeatPassword} = req.body;
  await authService.register(username, password, repeatPassword);
  res.redirect('/auth/login')
})
module.exports = router;
