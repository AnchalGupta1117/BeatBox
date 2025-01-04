const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                message: 'Failed to log out',
                status: 500,
        });
    }

    res.clearCookie('connect.sid');
    return res.json({
        message: 'Logged out successfully',
        status: 200,
    });
});
});

module.exports = router;