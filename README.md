# bamazon
This is an CLI Amazon-like storefront application. The app will take in orders from customers and deplete stock from the store's inventory.

Application uses: Node.js and MySQL

How to run this application:
* 1. clone this repo
* 2. go to the folder in terminal
* 3. run NPM install in terminal
* 4. Create database using MySQL workbench. Use the code in bamazon.sql
* 5. Add data to the table in MySQL to the table "products"
* 6. Run "node bamazonCustomer.js" in terminal

Screen Shots:
* when user run "node bamazonCustomer.js" it will show the current inventory:

![inventory](https://github.com/adrianctwo/bamazon/blob/master/image/inventory.PNG?raw=true)

* then it will prompt user on which item they want to buy put enter item_id and how many of that item do they want to buy:

![order form](https://github.com/adrianctwo/bamazon/blob/master/image/order.PNG?raw=true)

* If there are enough stock, it will show:

![order form](https://github.com/adrianctwo/bamazon/blob/master/image/summary.PNG?raw=true)

* If there is not enough stock, it will show:

![order form](https://github.com/adrianctwo/bamazon/blob/master/image/summary2.PNG?raw=true)
