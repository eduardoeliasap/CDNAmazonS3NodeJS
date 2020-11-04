const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ ok: true });
})

routes.post("/", multer(multerConfig).single('file'), (req, res) => {
  console.log(req.file);
  
  return res.json({ ok: true });
})

module.exports = routes;