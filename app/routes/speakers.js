var express = require('express');
var router = express.Router();

//Route for speakers list
router.get('/speakers', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('speakers', {
    pageTitle: 'Speakers',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakerList'
  });
});

//Route for specific speakers
router.get('/speakers/:speakerid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = [];

  data.speakers.forEach(function(item) {
    if (item.shortname == req.params.speakerid) {
      pageSpeakers.push(item);
      pagePhotos = pagePhotos.concat(item.artwork);
    }
  });

  res.render('speakers', {
    pageTitle: 'Speaker Info',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakerDetail'
  });
});

module.exports = router;
