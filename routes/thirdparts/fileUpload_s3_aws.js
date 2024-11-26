const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const moment = require('moment');


//aws-sdk, multer-s3 설치 필요 

const s3 = new aws.S3({
  accessKeyId: 'AKIAXYKJT736DKS47BWA', // 생성한 s3의 accesskey 
  secretAccessKey: 'wubkajjyKGRqWuS1/8U5mcJy8CNdsReHF3bcqc2/', // 생성한 s3의 secret key 
  region: 'ap-southeast-2'  // 지역설정 
})

const storage = multerS3({
  s3: s3,
  bucket: 'dodogonft', // s3 생성시 버킷명
  acl: 'public-read',   // 업로드 된 데이터를 URL로 읽을 때 설정하는 값입니다. 업로드만 한다면 필요없습니다.
  metadata: function (req, file, cb) {
    cb(null, {fieldName: file.fieldname}); // 파일 메타정보를 저장합니다.
  },
  key: function (req, file, cb) {
    var fileType = '';
    if(file.originalname === 'blob'){
      fileType +='.';
      fileType +=file.mimetype.replace('image/','');
    }
    cb(null, moment().format('YYYYMMDDHHmmss') + "_" + file.originalname+fileType) // key... 저장될 파일명과 같이 해봅니다.
  }
})

const upload = multer({ storage: storage, limits:{fieldSize: 25 * 1024 * 1024} }).single("file");

module.exports = upload;