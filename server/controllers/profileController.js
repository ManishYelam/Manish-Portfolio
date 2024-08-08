const Profile = require('../models/profile');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error('Incorrect file type');
    error.status = 422;
    return cb(error, false);
  }
  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
}).single('profilePicture');

const getProfilePicture = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ msg: 'No profile picture found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const uploadProfilePicture = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    const { filename, path: filepath, mimetype } = req.file;
    try {
      let profile = await Profile.findOne();
      if (profile) {
        profile.filename = filename;
        profile.filepath = filepath;
        profile.mimetype = mimetype;
        await profile.save();
      } else {
        profile = new Profile({ filename, filepath, mimetype });
        await profile.save();
      }
      res.json(profile);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

module.exports = {
  getProfilePicture,
  uploadProfilePicture,
};
