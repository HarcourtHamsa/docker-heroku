const router = require ('express').Router ();
const User = require ('../models/user.model');
const cloudinary = require ('cloudinary').v2;
const multer = require ('multer');
const path = require ('path');

// configure storage engine for multer
const storage = multer.diskStorage ({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb (null, file.fieldname + '-' + Date.now ());
  },
});

// file filter for multer
const fileFilter = (req, file, cb) => {
  let filter = /jpg|png|svg/; // reqex
  filter.test (path.extname (file.originalname))
    ? cb (null, true)
    : cb ('Error: not a valid file');
};

// init multer
const upload = multer ({
  storage: storage,
  limits: {fileSize: 1000000},
  fileFilter: fileFilter,
});

// configure cloudinary
cloudinary.config ({
  cloud_name: 'dgn6edv1k', // cloudinary cloud name
  api_key: process.env.CLOUDINARY_API_KEY, // cloudinary api key
  api_secret: process.env.CLOUDINARY_API_SECRET, // cloudinary api secret
});

// @route GET api/users/
// @desc Get list of all users
// @access Public
router.get ('/', async (req, res) => {
  try {
    const users = await User.find ().lean ();

    res.json (users);
  } catch (error) {
    return res.status (400).json ({
      message: 'There was a problem getting the users',
    });
  }
});

// @route GET api/users/id
// @desc Retrieve a user using a specific id
// @access Public
router.get ('/:id', (req, res) => {
  const {id} = req.params;
  User.findById (id)
    .then (result => res.json (result))
    .catch (err => console.log (err));
});

// @route POST api/users/login
// @desc Login user
// @access Public
router.post ('/login', (req, res) => {
  const {_id, password} = req.body;

  // Find user by id
  User.findOne ({_id})
    .then (user => {
      // Check if user exists
      if (!user) {
        return res.status (404).json ({emailnotfound: 'Email not found'});
      }

      if (user.password === password) {
        return res.json (user);
      } else {
        return res.status (404).json ({invalidPassword: 'Password not found'});
      }
    })
    .catch (err => console.log (err));
});

// Delete
router.delete ('/delete/:id', (req, res) => {
  const {id} = req.params;
  User.findByIdAndDelete (id)
    .then (res.json ({msg: 'User deleted'}))
    .catch (err => console.log (err));
});

// @route POST api/users/add
// @desc Register user
// @access Public
router.post ('/add', upload.single ('profilePhoto'), (req, res) => {
  cloudinary.uploader.upload (req.file.path, (error, result) => {
    if (error) {
      res.json ({msg: 'Error uploading photo'});
      console.log (error);
    } else {
      req.body.image = result.secure_url;
      req.body.imageId = result.public_id;
      console.log (req.body);

      // saving our details to MongoDB
      const {firstname, lastname, email, password, image, imageId} = req.body;

      const newUser = new User ({
        firstname,
        lastname,
        emailaddress: email,
        password,
        image,
        imageId,
        role: 'member',
        balance: 0.00,
      });

      newUser
        .save ()
        .then (console.log ('Done! new user added'))
        .catch (err => console.log (err));
    }
  });
});

// Update
router.put ('/update/:id', (req, res) => {
  const {id} = req.params;
  const {firstname, lastname, emailaddress, password, role, balance} = req.body;
  User.findById (id)
    .then (prevCredentials => {
      (prevCredentials.firstname = firstname), (prevCredentials.lastname = lastname), (prevCredentials.emailaddress = emailaddress), (prevCredentials.password = password), (prevCredentials.role = role), (prevCredentials.balance = balance);

      prevCredentials
        .save ()
        .then (res.json ({msg: 'User updated'}))
        .catch (err => console.log (err));
    })
    .catch (err => console.log (err));
});

module.exports = router;
