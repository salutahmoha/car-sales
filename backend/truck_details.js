const express = require('express');
const mysql = require('mysql');

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }));
  
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'car_sales'
});

app.post('/car_sales', async (req, res) => {

        const sql = "INSERT INTO tbl_contact (`clientname`,`email`,`phoneNumber`,`message`) VALUES(?, ?, ?, ?)";
        const values = [
            req.body.clientname,
            req.body.email,
            req.body.phoneNumber,
            req.body.message
        ];

        db.query(sql, values, (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        });
});

app.listen(3001, () => {
    console.log('Listening......');
});