const { db } = require("../database");

module.exports = {
  getData: (req, res) => {
    let scriptQuery = `select * from karyawan;`;
    if (req.query.nama) {
      scriptQuery = `select * from karyawan where nama = ${db.escape(
        req.query.nama
      )};`;
    }
    db.query(scriptQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  postData: (req, res) => {
    let { nama, usia, alamat, id_jabatan } = req.body;
    let scriptQuery = `insert into karyawan values (null, ${db.escape(
      nama
    )}, ${db.escape(usia)}, ${db.escape(alamat)}, ${db.escape(id_jabatan)})`;
    db.query(scriptQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  patchData: (req, res) => {
    let dataUpdate = [];
    for (let prop in req.body) {
      dataUpdate.push(`${prop} = ${db.escape(req.body[prop])}`);
    }

    let scriptQuery = `update karyawan set ${dataUpdate} where id = ${req.params.id};`;
    db.query(scriptQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  deleteData: (req, res) => {
    let scriptQuery = `delete from karyawan where id = ${db.escape(
      req.params.id
    )};`;
    db.query(scriptQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
};
