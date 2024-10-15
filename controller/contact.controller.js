const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact.model");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

const getContactId = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.status(200).json(contact);
});

const postContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({ name, email, phone });

  res.status(201).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    throw new Error("contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  const deleted = await Contact.findByIdAndDelete(req.params.id);
  // console.log(deleted);
  res.status(200).json(deleted);
});

const contactController = {
  getContacts,
  getContactId,
  postContact,
  updateContact,
  deleteContact,
};
module.exports = { contactController };
// console.log(module);
