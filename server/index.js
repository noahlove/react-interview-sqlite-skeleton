const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3005;

const db = new sqlite3.Database(':memory:');

// Middlewares
app.use(cors());
app.use(express.json());

// Initialize database
db.serialize(() => {
    db.run("CREATE TABLE products (id INT, title TEXT, product_type TEXT, inventory_quantity INT, cost REAL)");

    const stmt = db.prepare("INSERT INTO products VALUES (?, ?, ?, ?, ?)");
    stmt.run(1, "Slim Fit Jeans", "Pants", Math.floor(Math.random() * 101), 49.99);
    stmt.run(2, "Crew Neck T-Shirt", "Shirts", Math.floor(Math.random() * 101), 19.99);
    stmt.run(3, "Leather Belt", "Accessories", Math.floor(Math.random() * 101), 29.99);
    stmt.run(4, "Casual Sneakers", "Shoes", Math.floor(Math.random() * 101), 79.99);
    stmt.run(5, "Classic Suit Jacket", "Jackets", Math.floor(Math.random() * 101), 149.99);
    stmt.run(6, "Silk Tie", "Accessories", Math.floor(Math.random() * 101), 24.99);
    stmt.run(7, "Cotton Chinos", "Pants", Math.floor(Math.random() * 101), 59.99);
    stmt.run(8, "Linen Shirt", "Shirts", Math.floor(Math.random() * 101), 39.99);
    stmt.run(9, "Leather Wallet", "Accessories", Math.floor(Math.random() * 101), 34.99);
    stmt.run(10, "Dress Shoes", "Shoes", Math.floor(Math.random() * 101), 99.99);
    stmt.run(11, "Polo T-Shirt", "Shirts", Math.floor(Math.random() * 101), 29.99);
    stmt.run(12, "Denim Jacket", "Jackets", Math.floor(Math.random() * 101), 89.99);
    stmt.run(13, "Suede Boots", "Shoes", Math.floor(Math.random() * 101), 109.99);
    stmt.run(14, "Watch", "Accessories", Math.floor(Math.random() * 101), 199.99);
    stmt.run(15, "Socks", "Accessories", Math.floor(Math.random() * 101), 9.99);
    stmt.run(16, "Cargo Shorts", "Shorts", Math.floor(Math.random() * 101), 39.99);
    stmt.run(17, "Baseball Cap", "Accessories", Math.floor(Math.random() * 101), 14.99);
    stmt.run(18, "Leather Jacket", "Jackets", Math.floor(Math.random() * 101), 249.99);
    stmt.run(19, "Swim Trunks", "Shorts", Math.floor(Math.random() * 101), 29.99);
    stmt.run(20, "Sandals", "Shoes", Math.floor(Math.random() * 101), 49.99);


    stmt.finalize();
});

// Routes
app.get('/products', (req, res) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
        if (err) {
            throw err;
        }
        db.get("SELECT SUM(inventory_quantity * cost) AS total_inventory_value FROM products", [], (err, row) => {
            if (err) {
                throw err;
            }
            res.json({
                products: rows,
                totalInventoryValue: row.total_inventory_value
            });
        });
    });
});


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

