import mysql2 from "mysql2";
import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Job Application"
})

connection.connect((err) => {
    if(err) throw err
    return console.log("connected successfully");
})

app.listen(3000, () => {
    console.log("App is runnig");
})
app.post("/form.html", (req, res) => {
    const final_addr = req.body.address1 + " " + req.body.address2 + " " + req.body.city + " " + req.body.pincode;
    var personal_sql = `INSERT INTO personal_info (first_name, last_name, contact_no, address, email, gender, dob, created_at) VALUES('${req.body.fname}', '${req.body.lname}', '${req.body.ph}', '${final_addr}', '${req.body.email}', '${req.body.gender}', '${req.body.date}', NOW())`;

    
    connection.query(personal_sql, (err, res) => {
        if(err){
            console.log(err);
            return
        }
        res.send("/form.html")
    })
})