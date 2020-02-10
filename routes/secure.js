
const express = require('express');
 
const router = express.Router();
 
router.post('/submit-score', (req, res, next) => {
  res.status(200);
  res.json({ 'status': 'ok' });
});
 
router.get('/scores', (req, res, next) => {
  res.status(200).json({success: "Success"});
});
 
module.exports = router;