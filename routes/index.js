var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;


var userDataSchema = new Schema({
  title: {type: String, required: true},
  content: String,
  author: String,
    name: String,
gender:String,
  age:String,
  address:String,
  contact:String


}, {collection: 'user-data'});

var userdoctor= new Schema({
    Dtitle: {type: String, required: true},
    Dcontent: String,
    Dauthor: String,
    Dname: String,
    Dgender:String,
    Dage:String,
    Daddress:String,
    Dcontact:String


}, {collection: 'user-doctor'});

var appointmentDataSchema = new Schema({
    ltitle: {type: String, required: true},
    lcontent: String,
    lauthor: String,
    lname: String,
    lgender:String,
    lage:String,
    laddress:String,
    lcontact:String


}, {collection: 'user-dataappoint'});

var apoint = mongoose.model('apoint', appointmentDataSchema);
var userbloodSchema = new Schema({
    btitle: {type: String, required: true},
    bcontent: String,
    bauthor: String,
    bname: String,
    bgender:String,
    bage:String,
    baddress:String,
    bcontact:String,
    bgroup:String


}, {collection: 'user-blood'});


var doctor = mongoose.model('doctor', userdoctor);

var UserData = mongoose.model('UserData', userDataSchema);


var register = mongoose.model('register', userbloodSchema);

router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/appoint', function(req, res, next) {
    res.render('appointment');
});
router.get('/showapoint', function(req, res, next) {
    res.render('showappointment');
});
router.get('/showappoint1', function(req, res, next) {
    res.render('showappointment');
});

router.get('/showa', function(req, res, next) {
    res.render('doctorshow');
});

router.get('/searchdata', function(req, res, next) {
    res.render('searchda');
});
router.get('/bloodmain', function(req, res, next) {
    res.render('bloodmain');
});
router.get('/Login', function(req, res, next) {
    res.render('adminres');
});
router.get('/add-data', function(req, res, next) {
    res.render('addpatient');
});
router.get('/adddoctor', function(req, res, next) {
    res.render('doctornres');
});
router.get('/adddoct', function(req, res, next) {
    res.render('adddoctor');
});
router.get('/showdoc', function(req, res, next) {
    res.render('doctorsho');
});
router.get('/doctormain', function(req, res, next) {
    res.render('doctormain');
});
router.get('/log', function(req, res, next) {
    res.render('doctornres');
});

router.get('/addd-data', function(req, res, next) {
    res.render('blooddon');
});
router.get('/blodmain', function(req, res, next) {
    res.render('bloodmain');
});
router.get('/blodsearch', function(req, res, next) {
    res.render('bgrsearch');
});

router.get('/contact', function(req, res, next) {
    res.render('contact');
});



router.get('/deletedata', function(req, res, next) {
    res.render('delete');
});
router.get('/updatedata', function(req, res, next) {
    res.render('updatepat');
});
router.get('/dget-data', function(req, res, next) {
    register.find()
        .then(function(doc) {
            res.render('bloodsho', {bitems: doc});
        });
});
router.get('/get-data', function(req, res, next) {
  UserData.find()

      .then(function(doc) {
        res.render('show', {items: doc});
      });
});

router.get('/lget-data', function(req, res, next) {
    apoint.find()
        .then(function(doc) {
            res.render('showappointment', {items3: doc});
        });
});

router.get('/bget-data', function(req, res, next) {
    doctor.find()
        .then(function(doc) {
            res.render('doctorsho', {items2: doc});
        });
});

router.post('/dinsert', function(req, res, next) {
    var item2 = {
        Dtitle: req.body.Dtitle,
        Dcontent: req.body.Dcontent,
        Dname:req.body.Dname,
        Dgender:req.body.Dgender,
        Dage:req.body.Dage

    };

    var data2 = new doctor(item2);
    data2.save();

    res.render('adminres');
});


router.post('/binsert', function(req, res, next) {
    var item1 = {
        btitle: req.body.btitle,
        bcontent: req.body.bcontent,
        bauthor: req.body.bauthor,
        bname:req.body.bname,
        bgender:req.body.bgender,
        bage:req.body.bage,
        baddress:req.body.baddress,
        bcontact:req.body.bcontact,
        bgroup:req.body.bgroup
    };

    var data1 = new register(item1);
    data1.save();

    res.render('bloodmain');
});
router.post('/linsert', function(req, res, next) {
    var item3 = {
        ltitle: req.body.ltitle,
        lcontent: req.body.lcontent,
        lauthor: req.body.lauthor,
        lname:req.body.lname,
        lgender:req.body.lgender,
        lage:req.body.lage,
        laddress:req.body.laddress,
        lcontact:req.body.lcontact,
        lgroup:req.body.lgroup
    };

    var data3 = new apoint(item3);
    data3.save();

    res.render('index');
});
router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
      name:req.body.name,
      gender:req.body.gender,
      age:req.body.age,
      address:req.body.address,
      contact:req.body.contact,

  };

  var data = new UserData(item);
  data.save();

res.render('adminres');
});




router.post('/update', function(req, res, next) {
  var id = req.body.id;

  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.title = req.body.title;
    doc.content = req.body.content;
    doc.author = req.body.author;
    doc.name=req.body.name;
    doc.gender=req.body.gender;
      doc.age=req.body.age;
      doc.address=req.body.address;
      doc.contact=req.body.contact;


      doc.save();
  })
    res.render('adminres');
});
router.post('/dupdate', function(req, res, next) {
    var did = req.body.id;

    DUserData.findById(did, function(err, doc) {
        if (err) {
            console.error('error, no entry found');
        }
        doc.dtitle = req.body.dtitle;
        doc.dcontent = req.body.dcontent;
        doc.dauthor = req.body.dauthor;
        doc.dauthor=req.body.dname;
        doc.dauthor=req.body.dgender;
        doc.dauthor=req.body.dage;
        doc.dauthor=req.body.daddress;
        doc.dauthor=req.body.dcontact;


        doc.save();
    })
    res.render('dadminres');
});

router.post('/ddelete', function(req, res, next) {
  var did = req.body.id;
  DUserData.findByIdAndRemove(id).exec();
    res.render('dadminres');
});
router.post('/delete', function(req, res, next) {
    var id = req.body.id;
    UserData.findByIdAndRemove(id).exec();
    res.render('adminres');
});
router.post('/search', function(req, res, next) {
    var id = req.body.id;
    UserData.findById(id)
        .then(function(doc) {
            res.render('show', {items: doc});
        });


});
router.post('/bsearch', function(req, res, next) {
    var id1 = req.body.id1;
    register.findById(id1)
        .then(function(doc) {
            res.render('bloodsho', {bitems: doc});
        });

});

    router.post('/myrot', function(req, res, next) {
    var id = req.body.id;
    UserData.findByIdAndRemove(id).exec();
    res.render('adminres');
});

module.exports = router;
