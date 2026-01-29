const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes.js");

dotenv.config();
const app = express();

app.use(express());
app.use(express.json());
app.use(cors())

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
