var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "As128128",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;

        console.table(results);

        inquirer.prompt([{
            name: "product",
            type: "input",
            message: "Please enter the ID for the item that you want to purchase."
        }, {
            name: "amount",
            type: "input",
            message: "How many would you like to purchase?"
        }]).then(function (answer) {
            // get the information of the chosen item
            var chosenProduct;
            for (var i = 0; i < results.length; i++) {
                if (results[i].item_id === parseInt(answer.product)) {
                    chosenProduct = results[i];
                }
            }

            // determine if there is enough stock 
            if (chosenProduct.stock_quantity > parseInt(answer.amount)) {

                connection.query("UPDATE products SET ? WHERE ?", [
                    {
                        stock_quantity: chosenProduct.stock_quantity - parseInt(answer.amount),
                    },
                    {
                        item_id: chosenProduct.item_id
                    }], function (error) {
                        if (error) throw err;
                        console.log("\n\n");
                        console.log("Product purchased successfully!");
                        console.log("\n\n");
                        console.log("========== Summary ==========")
                        console.log("\n");
                        console.log("Item ID: " + chosenProduct.item_id);
                        console.log("Item Name: " + chosenProduct.product_name);
                        console.log("Item Department " + chosenProduct.department_name);
                        console.log("Total Cost: $" + (chosenProduct.price * parseInt(answer.amount)));
                        console.log("\n");
                        console.log("=============================")
                        console.log("\n\n");
                        start();
                    });
            } else {
                console.log("\n\n");
                console.log("========== Summary ==========")
                console.log("\n");
                console.log("Insufficient Stock.");
                console.log("\n");
                console.log("=============================")
                console.log("\n\n");
                start();
            }
        });
    });
};