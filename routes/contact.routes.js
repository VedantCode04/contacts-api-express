const express = require("express")
const contactsRouter = express.Router()

const {contactController} = require("../controller/contact.controller")

contactsRouter.get("/", contactController.getContacts);

contactsRouter.get("/:id", contactController.getContactId);

contactsRouter.post("/post/", contactController.postContact);

contactsRouter.put("/update/:id", contactController.updateContact);

contactsRouter.delete("/delete/:id", contactController.deleteContact);


module.exports = {contactsRouter};