


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

function updateItems(){
	console.log("updating items");
	var query = connection.query("update items set ? where ?",
		[{qunatity:100},{product:"hammer}"}]);
		[{qunatity:200},{product:"puppy chow}"}];
		[{qunatity:50},{product:"shampoo}"}];
		[{qunatity:250},{product:"nike shoes}"}];
		[{qunatity:120},{product:"tent}"}];
		[{qunatity:120},{product:"football}"}];
		[{qunatity:100},{product:"backpack}"}];
		[{qunatity:50},{product:"lamp}"}];
		[{qunatity:400},{product:"smart phone}"}];
		[{qunatity:100},{product:"microwave}"}];
}

function insertItems(item, cost, qty){
	var query = connection.query("insert into product SET ?",
		[{item:item, cost:cost, quantity:qty}]);
}

function insertItems(item, cost, qty){
	var query = connection.query("insert into product (item, price, quanity)",
		[name, cost, qty]);
}

//connection.end();