import express from "express";
import { db } from "../db.js";
const router = express.Router();

router.post("/register", (req, res) => {
  const q = "SELECT * FROM auth WHERE `email`=?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) {
      return res.json("error");
    }
    if (data.length) {
      return res.json("user already exists!!!");
    }

    const q = "INSERT INTO auth (`username`,`email`,`password`) VALUES(?)";
    const values = [req.body.username, req.body.email, req.body.password];
    db.query(q, [values], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  });
});

router.post("/login", (req, res) => {
  const q = "SELECT * FROM auth WHERE `email`=? and `password`=?";

  db.query(q, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("ERROR OCCURRED");
    }
    if (data.length) {
      return res.json("success");
    } else {
      return res.json("Failed to login");
    }
  });
});

router.get("/get", (req, res) => {
  const q = "SELECT username FROM auth WHERE `email`=?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) {
      return res.json({ message: "error inside server" });
    }
    return res.json(data);
  });
});

router.delete("/delete", (req, res) => {
  const q = "DELETE FROM auth WHERE ID=?";
  const id = req.params.id;
  db.query(q, [id], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
export default router;
