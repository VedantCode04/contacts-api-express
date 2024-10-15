const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const {contactsRouter} = require("./routes/contact.routes");
const {userRouter} = require("./routes/user.routes")
const {ErrorHandler} = require("./middleware/error.middleware")
const {connectDb} = require("./config/db.js")

app.use(express.json())
app.use(ErrorHandler)

app.use("/api/contacts", contactsRouter);
app.use("/api/users", userRouter)


connectDb();

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`server on ${PORT}`);
})