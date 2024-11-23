// const multer = require('multer');

// // ตั้งค่า Storage สำหรับ Multer
// const storage = multer.memoryStorage(); // ใช้ Memory Storage เพื่อเก็บไฟล์ในหน่วยความจำ

// // สร้าง instance ของ multer
// const uploadMiddleware = multer({ storage });

// module.exports = uploadMiddleware;


const path = require('path')
const multer = require('multer')


// D:\เขียน Code\CC18\My Project\Snake Project\SnakeProject Back\upload-pic
console.log('Test')
// console.log(__dirname)
// console.log(path.join(__dirname, '../upload-pic'))
const storage = multer.diskStorage({
	destination : (req, file, cb) => cb(null, path.join(__dirname, '../../upload-pic')),
	filename : (req, file, cb) => {
		
		// const fullFilename = `${id}_${Date.now()}_${Math.round(Math.random()*1000)}${path.extname(file.originalname)}`
		const fullFilename = `${Date.now()}${path.extname(file.originalname)}`
		cb(null, fullFilename)
	}
})

module.exports = multer({storage : storage})