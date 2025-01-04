const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../../models/user');
const { loginSchema } = require('../../Validations/validation');  

router.post('/', async (req, res) => {
    const { email, password } = req.body; 
    try {
      const { error } = loginSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,  // to only send the first validation error message
          status: 400,
        });
      }

      const foundUser = await User.findOne({ email }); 
      if (!foundUser) {
        return res.status(400).json({
          message: 'invalid email or password',
          status: 400,
        });
      }
      const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid email or password',
        status: 400,
      });
    }

    return res.status(200).json({
        message: 'Login successfully',
        status: 200,
      });
    
    }
    
    catch (err) {
      console.error(err);  
      res.status(500).json({
        message: 'Internal server error',
        status: 500,
      });
      
    }
});


module.exports = router;
