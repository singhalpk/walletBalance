import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/wallet', (req, res) => {
  const id = req.query.id;
  db.map((wallet) => {
    if (wallet.userId === id) {
      return res.status(200).send({
        success: 'true',
        message: 'wallet retrieved successfully',
        wallet,
      });
    } 
});
 return res.status(404).send({
   success: 'false',
   message: 'wallet does not exist',
  });
});
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});