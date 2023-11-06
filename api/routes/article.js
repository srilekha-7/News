import express from "express";
import { db } from "../db.js";
const router = express.Router();

router.post("/post", (req, res) => {
  const q = "SELECT * FROM article WHERE `title`=?";
  db.query(q, [req.body.title], (err, data) => {
    if (err) {
      return res.json("error");
    }
    if (data.length) {
      return res.json("Already added to saved articles");
    }

    const q =
      "INSERT INTO article (`umail`,`title`,`description`,`img`,`link`) VALUES(?)";
    const values = [
      req.body.umail,
      req.body.title,
      req.body.description,
      req.body.urlToImage,
      req.body.url,
    ];
    console.log(values);
    db.query(q, [values], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  });
});

router.get("/get", (req, res) => {
  // const email = req.query.email;
  // console.log(email);
  const query = "SELECT * FROM article";
  db.query(query, (err, results) => {
    if (err) {
      return res.json(err);
    }
    // console.log(results.rows);
    return res.json(results);
  });
});

export default router;
