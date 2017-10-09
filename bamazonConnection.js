




var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
 
  user: "root",
 
  password: "running50s",
  database: "bamazon"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

function selectAll() {
  connection.query("select * from products", function(err, results){
    if(err){throw err;}
    console.log(results);
  });
}