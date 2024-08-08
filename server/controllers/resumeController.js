const Resume = require('../models/resume');
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
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
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
}).single('resume');

const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne();
    if (resume) {
      res.json(resume);
    } else {
      res.status(404).json({ msg: 'No resume found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const uploadResume = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    const { filename, path: filepath, mimetype } = req.file;
    try {
      let resume = await Resume.findOne();
      if (resume) {
        resume.filename = filename;
        resume.filepath = filepath;
        resume.mimetype = mimetype;
        await resume.save();
      } else {
        resume = new Resume({ filename, filepath, mimetype });
        await resume.save();
      }
      res.json(resume);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

module.exports = {
  getResume,
  uploadResume,
};
