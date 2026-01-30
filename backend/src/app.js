const express = require("express");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes.js");
const cors = require('cors');
app.use(cors());   

dotenv.config();
const app = express();

app.use(express());
app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
