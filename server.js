// server.js
import app from "#app"; // your existing Express app
import db from "#db/client";
import productsRouter from "./routes/products.js"; // adjust path

const PORT = process.env.PORT ?? 3000;

// connect database
await db.connect();

// parse JSON bodies
app.use(express.json());

// mount products router at /api/products
app.use("/api/products", productsRouter);

// optional health check
app.get("/", (req, res) => {
  res.send("Server running");
});

// start server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});