var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.get('/eligible', function (req, res) {
  // get the answer from the query string (eg. ?answer=a)
  var answer = req.query.answer

if (answer === 'married') {
   res.redirect('ineligible')
 } else if (answer === 'business') {
   res.redirect('business-visa')
 } else if (answer === 'resident') {
   res.redirect('resident')
 } else if (answer === 'partner') {
   res.redirect('partner-visa')
 } else if (answer === 'study') {
   res.redirect('study-visa')
 } else if (answer === 'work') {
   res.redirect('work-visa')
 } else if (answer === 'diplomat') {
   res.redirect('diplomat-visa')
 } else {
     res.render('restrictions')
   }
})

router.get('/business-gotvisa', function (req, res) {
  var businessvisa = req.query.businessvisa

if (businessvisa === 'no') {
   res.redirect('business-page')
 } else {
     res.render('restrictions')
   }
})

// router.get('/business-page', function (req, res) {
//  var businesspage = req.query.businesspage

// if (businesspage === 'businesstrip' || businesspage === 'paid' || businesspage === 'academic') {
//      res.redirect('restrictions')
//    }
// })

router.get('/diplomat-gotvisa', function (req, res) {
  var diplomatvisa = req.query.diplomatvisa

if (diplomatvisa === 'no') {
   res.redirect('diplomat-no-page')
 } else {
   res.render('diplomat-yes-page')
   }
})

router.get('/partner-gotvisa', function (req, res) {
  var partnervisa = req.query.partnervisa

if (partnervisa === 'no') {
   res.redirect('ineligible')
 } else {
     res.render('partner-page')
   }
})

router.get('/partner-page', function (req, res) {
  var partnerpage = req.query.partnerpage

if (partnerpage === 'eea') {
   res.redirect('ineligible')
 } else {
     res.render('restrictions')
   }
})

router.get('/study-gotvisa', function (req, res) {
  var studyvisa = req.query.studyvisa

if (studyvisa === 'no') {
   res.redirect('ineligible')
 } else {
     res.render('restrictions')
   }
})

router.get('/work-gotvisa', function (req, res) {
  var workvisa = req.query.workvisa

if (workvisa === 'no') {
   res.redirect('ineligible')
 } else {
     res.render('work-page')
   }
})

router.get('/restrictions-page', function (req, res) {
  var restrictions = req.query.restrictions

if (restrictions === 'yes') {
   res.redirect('ineligible-restrictions')
 } else {
     res.render('convictions')
   }
})

router.get('/convictions-page', function (req, res) {
  var convictions = req.query.convictions

if (convictions === 'yes') {
   res.redirect('ineligible-restrictions')
 } else {
     res.render('penalties')
   }
})

router.get('/penalties-page', function (req, res) {
  var penalties = req.query.penalties

if (penalties === 'yes') {
   res.redirect('ineligible-restrictions')
 } else {
     res.render('passport-number')
   }
})

module.exports = router
