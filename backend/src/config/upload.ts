import multer from 'multer';
import path from 'path';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

const multerConfig = {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      return cb(null, fileName);
    },
  }),
  // limits: {
  //   fileSize: 2 * 1024 * 1024,
  // },
  // fileFilter: (request, file, callback) => {
  //   const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png'];

  //   if (allowedMimes.includes(file.mimetype)) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error('Invalid file format.'));
  //   }
  // },
};

const uploads = multer(multerConfig);

export { uploads, multerConfig };