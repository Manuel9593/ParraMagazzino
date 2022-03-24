var express = require("express");
var apiServer = express();
var cors = require("cors");
const mysql = require("mysql2");

var port = 3000;
var host = "localhost";
apiServer.listen(port, host, () => {
    console.log("Server running at http://%s:%d", host, port);
});

const conn = mysql.createConnection({
    host: 'parrarodriguez.manue.tave.osdb.it',
    user: 'c188_prm_5AI',
    database: 'c188_prm_5AI_2122',
    password: 'Az-52761'
});

apiServer.use(cors());

apiServer.get("/", (request, response)=>{
    response.send("Ciao client sei in home");
});

apiServer.post("/api/insertNewElement",  (request, response)=>{
    console.log("Request: ", request.query);
    conn.query(
        'INSERT INTO magazzino(codice, nome, quantita) VALUES VALUES (?, ?, ?)',
        [request.query.mail, request.query.pass],
        (err, result)=>{
            console.log("Analysis: ", err, result);
            response.setHeader("Content-Type", "application/json");
            if(result[0].utenti==1)
                response.sendStatus(200).json({message:'Successful Sign In!'});
            else
                response.sendStatus(400).json({message:'Failed To Sign In!'});
        }
    );
});
apiServer.delete("/api/deleteElement",  (request, response)=>{
    console.log("Request: ", request.query);
    conn.query(
        'INSERT INTO c188_prm_5AI_2122.user VALUES (?, ?);',
        [request.query.mail, request.query.pass],
        (err, result)=>{
            console.log("Analysis: ", err);
            response.setHeader("Content-Type", "application/json");
            if(err==null)
                response.sendStatus(200).json({message:'Successful Sign Up!'});
            else
                response.sendStatus(400).json({message:'Failed To Sign In!'});
        }
    );
});
apiServer.put("/api/addElementNumber",  (request, response)=>{
    console.log("Request: ", request.query);
    conn.query(
        'SELECT count(*) AS utenti FROM c188_prm_5AI_2122.user WHERE mail="?" AND pass="?";',
        [request.query.mail, request.query.pass],
        (err, result)=>{
            console.log(result);
            response.setHeader("Content-Type", "application/json");
            if(result[0].utenti==1)
                response.sendStatus(200).json({message:'Login effetuato!'});
            else
                response.sendStatus(400).json({message:'Login fallito!'});
        }
    );
});apiServer.delete("/api/subtractElementNumber",  (request, response)=>{
    console.log("Request: ", request.query);
    conn.query(
        'SELECT count(*) AS utenti FROM c188_prm_5AI_2122.user WHERE mail="?" AND pass="?";',
        [request.query.mail, request.query.pass],
        (err, result)=>{
            console.log(result);
            response.setHeader("Content-Type", "application/json");
            if(result[0].utenti==1)
                response.sendStatus(200).json({message:'Login effetuato!'});
            else
                response.sendStatus(400).json({message:'Login fallito!'});
        }
    );
});
apiServer.get("/api/getAllElements",  (request, response)=>{
    console.log("Request: ", request.query);
    conn.query(
        'SELECT count(*) AS utenti FROM c188_prm_5AI_2122.user WHERE mail="?" AND pass="?";',
        [request.query.mail, request.query.pass],
        (err, result)=>{
            console.log(result);
            response.setHeader("Content-Type", "application/json");
            if(result[0].utenti==1)
                response.sendStatus(200).json({message:'Login effetuato!'});
            else
                response.sendStatus(400).json({message:'Login fallito!'});
        }
    );
});