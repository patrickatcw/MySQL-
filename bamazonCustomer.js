

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",
 
  password: "running50s",
  database: "bamazon"
});

connection.connect(function(err, results) {
  if (err) throw err;
  start();
});
function start() {
  connection.query('select * from products', function(err, results) {
    if (err) {throw err}
    for (var i = 0; i < results.length; i++) {
      console.log(results[i].item_id, results[i].product_name, results[i].price)
    }

    inquirer.prompt([
    {
      name: "whichProduct", 
      type: "input",
      message: ["Which product would you like to buy?"]

  },{
    name: "quantity",
   type: "input",
   message: ["How many would you like to buy?"]
  }])
    .then(function(answer) {
                    // get the information of the chosen item
        var choseItem = answer.whichProduct -1;
        var quantity = answer.quantity;
          if (quantity < results[choseItem].stock_quantity) {
        connection.query("update products set ? where ?", [{
          stock_quantity: results[choseItem].stock_quantity - quantity
        },{
          item_id: results[choseItem].item_id
        }], function(error){
          if(err) {throw err}
            
        })
        }
   }
  )
  })};
  

  // inquirer
  //   .prompt([{
  //     name: "whichProduct", 
  //     type: "rawlist",
  //     message: ["Which product would you like to buy?"],
  //     choices: ["hammer", "puppy chow", "shampoo", "nike shoes", "tent", "football", "backpack", ",lamp", "smart phone", "microwave"]   
      
  // },
  
  

       

   /* .then(function(answer) {
      
      connection.query(
        "INSERT INTO item SET ?",
        {
          item_name: answer.item,
          quantity: answer.quantity,
          
        },
        function(err) {
          if (err) throw err;
          console.log("Your product(s) was purchsed successfully! Would you like to purchase another item(s)?");
                      // re-prompt the user for if they want buy more
          start();
        },
      
    


function availableProducts() {   
                    // query the database for all items being sold
  connection.query("SELECT * FROM items", function(err, results) {
    if (err) throw err;
                    // once you have the items, prompt the user for which they'd like to buy
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_name);
            }
            return choiceArray;
          },
          message: "What product would you like to purchase?"
        
        },
       
                    // determine if item was in stock
       if (choseItem.in_stock < parseInt(answer.buy)) {
                    // if the product was in stock and purchased, update database, let the user know, and start over
          connection.query(
            "UPDATE itemss SET ? WHERE ?",
            [
              {
                in_stock: answer.buy
              },
              {
                id: choseItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Item purchased successfully!");
              start();
            }
          );
        }

        else {
              // item was out of stock
          console.log("The item you chose was out of stock. Purchase another item...");
          start();
        }
      };
  };
}

          //for inventory
function updateProduct() {
  console.log("Updating all item quantities...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: 100
      },
      {
        item: "hammer"
      }
    ],
    [
      {
        quantity: 200
      },
      {
        item: "puppy chow"
      }
    ],
    [
      {
        quantity: 50
      },
      {
        item: "shampoo"
      }
    ],
    [
      {
        quantity: 250
      },
      {
        item: "nike shoes"
      }
    ],
    [
      {
        quantity: 120
      },
      {
        item: "tent"
      }
    ],
    [
      {
        quantity: 120
      },
      {
        item: "football"
      }
    ],
    [
      {
        quantity: 100
      },
      {
        item: "backpack"
      }
    ],
    [
      {
        quantity: 50
      },
      {
        item: "lamp"
      }
    ],
    [
      {
        quantity: 400
      },
      {
        item: "smart phone"
      }
    ],
    [
      {
        quantity: 100
      },
      {
        item: "microwave"
      }
    ],

    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
                // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );
                 // logs the actual query being run
  console.log(query.sql);

}
function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
                  // Log all results of the SELECT statement
    console.log(res);
  });
}

    connection.end();
  };
*/