import express from 'express';
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes.js";

const router = express.Router();

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

router.use("/api/v1/users" , userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});