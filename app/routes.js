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
 } else if (answer === 'businesswork') {
   res.redirect('/v2/businesswork-visa')
 } else if (answer === 'academicstudy') {
   res.redirect('/v2/academicstudy-visa')
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
 } else if (answer === 'diplomatv2') {
   res.redirect('/v2/diplomat-visa')
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

router.get('/business-novisa', function (req, res) {
  var businessnovisa = req.query.businessnovisa

if (businessnovisa === 'paid') {
   res.redirect('ineligible')
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

// start of businesswork-visa.html logic

router.get('/v2/businesswork-gotvisa', function (req, res) {
  var businessworkvisa = req.query.businessworkvisa

if (businessworkvisa === 'yes') {
   res.redirect('/v2/businesswork-whichvisa')
 } else {
     res.render('v2/businesswork-novisa')
   }
})

// end of businesswork-visa.html logic


router.get('/v2/businesswork-novisa', function (req, res) {
  var businessworknovisa = req.query.businessworknovisa

if (businessworkvisa === 'no') {
   res.redirect('v2/whatwillyoubedoing')
 } else {
     res.render('v2/ineligible')
   }
})

router.get('/v2/businesswork-6months', function (req, res) {
  var businesswork6months = req.query.businesswork6months

if (businesswork6months === 'no') {
   res.redirect('/v2/whatwillyoubedoing')
 } else {
     res.render('v2/ineligible')
   }
})

router.get('/v2/what-will-you-be-doing', function (req, res) {
  var whatwillyoubedoingpage = req.query.whatwillyoubedoingpage

if (whatwillyoubedoingpage === 'attending') {
   res.redirect('/v2/restrictions')
 } else {
     res.render('v2/ineligible')
   }
})

// start of academicstudy-visa.html logic

router.get('/v2/academicstudy-visapage', function (req, res) {
  var academicstudyvisapage = req.query.academicstudyvisapage

if (academicstudyvisapage === 'yes') {
   res.redirect('restrictions')
 } else {
     res.render('v2/academicstudy-novisa')
   }
})

router.get('/v2/academicstudy-6months', function (req, res) {
  var academicstudy6months = req.query.academicstudy6months

if (academicstudy6months === 'no') {
   res.redirect('/v2/whatwillyoubedoing-academic')
 } else {
     res.render('v2/ineligible')
   }
})

router.get('/v2/what-will-you-be-doing-academic', function (req, res) {
  var whatwillyoubedoingacademic = req.query.whatwillyoubedoingacademic

if (whatwillyoubedoingacademic === 'research') {
   res.redirect('/v2/restrictions')
 } else {
     res.render('v2/ineligible')
   }
})

router.get('/diplomat-gotvisav2', function (req, res) {
  var diplomatvisav2 = req.query.diplomatvisav2

if (diplomatvisav2 === 'no') {
   res.redirect('/v2/diplomat-yes-page')
 } else {
   res.render('restrictions')
   }
})
// end of academicstudy-visa.html logic


//router.get('/inputemail', function (req, res) {
//    var email = req.query['email'];
//    res.render('check-your-answers', {email:email});
//});

//router.get('/inputname', function (req, res) {
//    var surname = req.query['surname'];
//    var givennames = req.query['givennames'];
//    res.render('check-your-answers', {surname:surname, givennames:givennames});
//});

module.exports = router
