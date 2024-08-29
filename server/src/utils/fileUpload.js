const multer = require('multer');
const path = require('path');
const fs = require('fs');

const createMulterStorage = (folder = 'uploads') => {
  // Ensure the folder exists
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, folder); // Use the provided folder or default to 'uploads'
    },
    filename: (req, file, cb) => {
      const uniqueName = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    }
  });

  return multer({ storage: storage });
};

module.exports = {
  createMulterStorage
};
