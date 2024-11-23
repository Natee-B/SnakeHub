const express = require("express");
const authRouter = require("./src/routes/authRouter");
const memberRouter = require("./src/routes/memberRouter")
// const homeRouter = require("./src/routes/homeRouter");
const categoryRouter = require("./src/routes/categoryRouter");
const blogRouter = require("./src/routes/blogRouter");
const contactRouter = require("./src/routes/contactRouter");
const orderRouter = require("./src/routes/orderRouter")
const uploadRouter = require("./src/routes/uploadRouter")
const notFound = require("./src/middleware/not-found");
const errorMiddleware = require("./src/middleware/error-middleware");
const cors = require('cors');
require("dotenv").config();


const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json({ limit: '25mb' })); // เพิ่มขนาดที่อนุญาต
// app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
app.use(express.json());
app.use(cors())

app.use("/api", authRouter);
app.use("/api", memberRouter);
app.use("/api", categoryRouter);   
app.use("/api",blogRouter)
app.use("/api",contactRouter)
app.use("/api",orderRouter)
app.use("/api",uploadRouter)

app.use("*",notFound)
app.use(errorMiddleware);

const port = process.env.PORT || 8800;
app.listen(port, () => console.log(`Server Run ${port}`));
