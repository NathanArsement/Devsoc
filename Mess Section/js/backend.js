import cors from "cors";
import express,{json} from "express";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let menuItems = [];

// Set menu items dynamically
app.post("/set-menu", (req, res) => {
    const { items } = req.body;
    if (!items || !Array.isArray(items)) {
        return res.status(400).json({ message: "Invalid menu items!" });
    }
    menuItems = items;
    res.json({ message: "Menu updated successfully!" });
});

let orders = [];

// Get menu items
app.get("/menu", (req, res) => {
    res.json(menuItems);
});

// Get menu items
app.get("/menu", (req, res) => {
    res.json(menuItems);
});


// Place an order
app.post("/order", (req, res) => {
    const { items } = req.body;
    if (!items || items.length === 0) {
        return res.status(400).json({ message: "Order cannot be empty!" });
    }
    
    let total = 0;
    let orderDetails = items.map(id => {
        const item = menuItems.find(m => m.id === id);
        if (item) {
            total += item.price;
            return item;
        }
    }).filter(Boolean);
    
    let orderId = orders.length + 1;
    orders.push({ id: orderId, items: orderDetails, total });
    res.json({ message: "Order placed successfully!", orderId, total });
});

// Get all orders
app.get("/orders", (req, res) => {
    res.json(orders);
});

app.listen(port, () => {
    console.log(`Night Mess Backend running at http://localhost:${port}`);
});