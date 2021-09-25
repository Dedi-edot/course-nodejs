require('dotenv').config();
const express = require("express");
const cors = require("cors");
// const mysql = require("mysql");
const port = process.env.PORT || 8081;
const app = express();
const { karyawanRouter } = require("./router");

app.use(cors());
app.use(express.json());

app.use("/karyawan", karyawanRouter);

app.listen(port, () => {
  console.log("Server Running on port", port);
});

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Edhot111",
//   database: "db_kantor",
//   port: 3306,
//   multipleStatements: true,
// });

// db.connect((err) => {
//   if (err) {
//     return console.error(`Error: ${err.message}`);
//   }
//   console.log(`MySQL Connected`);
// });

// app.get("/", (req, res) => {
//   res.status(200).send(`<h4>Integrated with MySQL</h4>`);
// });

// app.get("/karyawan", (req, res) => {
//   let scriptQuery = "select * from karyawan;";
//   if (req.query.nama) {
//     scriptQuery = `select * from karyawan where nama = ${db.escape(
//       req.query.nama
//     )};`;
//   }
//   db.query(scriptQuery, (err, result) => {
//     if (err) res.status(500).send(err);
//     res.status(200).send(result);
//   });
// });

// app.post("/add-karyawan", (req, res) => {
//   console.log(req.body);
//   let { nama, usia, alamat, id_jabatan } = req.body;
//   let scriptQuery = `insert into karyawan values (null, ${db.escape(
//     nama
//   )}, ${db.escape(usia)}, ${db.escape(alamat)}, ${db.escape(id_jabatan)})`;
//   console.log(scriptQuery);
//   db.query(scriptQuery, (err, result) => {
//     if (err) res.status(500).send(err.message);
//     db.query(
//       `select * from karyawan where nama = ${db.escape(nama)};`,
//       (err2, result2) => {
//         if (err2) res.status(500).send(err2);
//         res
//           .status(200)
//           .send({ message: "Penambahan data berhasil", data: result2 });
//       }
//     );
//     // res.status(200).send(result);
//   });
// });

// app.patch("/edit-karyawan/:id", (req, res) => {
//   let dataUpdate = [];
//   for (let prop in req.body) {
//     dataUpdate.push(`${prop} = ${db.escape(req.body[prop])}`);
//   }

//   let scriptQuery = `update karyawan set ${dataUpdate} where id = ${req.params.id};`;
//   db.query(scriptQuery, (err, result) => {
//     if (err) res.status(500).send(err);
//     res.status(200).send(result);
//   });
// });

// app.delete("/delete-karyawan/:id", (req, res) => {
//   let scriptQuery = `delete from karyawan where id = ${db.escape(
//     req.params.id
//   )}`;

//   db.query(scriptQuery, (err, result) => {
//     if (err) res.status(500).send(err);
//     res.status(200).send(result);
//   });
// });


