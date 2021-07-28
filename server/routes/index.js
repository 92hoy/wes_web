var express = require("express");
var router = express.Router();
const mysql = require("mysql"); // << 새로 추가된 부분

var connection = mysql.createConnection({
  /// 새로 추가된 부분
  host: "localhost",
  user: "root",
  password: "0000",
  database: "wes_studio",
});
connection.connect();

// const Menu = [
//   { title: "Cover", url: "/cover" },
//   { title: "Editorial", url: "/Editorial" },
//   { title: "Celebrity", url: "/Celebrity" },
//   { title: "Advertising", url: "/Advertising" },
//   { title: "Personal", url: "/Personal" },
//   { title: "Contact", url: "/Contact" },
// ];

router.get("/", function (req, res) {
  res.send({ menu: "Hello React x Node.js" });
});
// router.get("/getMenu", function (req, res) {
//   res.send({ menu: Menu });
// });
router.get("/getCategory", function (req, res) {
  res.send({ menu: "helllllllllllll" });
});

router.get("/getMenu", (req, res) => {
  console.log("getMenu");
  connection.query(
    "SELECT title,url FROM menu where use_yn ='Y'",
    (err, rows, fields) => {
      if (err) {
        console.log("데이터 가져오기 실패");
      } else {
        res.send({ menu: rows });
      }
    }
  );
});

router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

module.exports = router;
