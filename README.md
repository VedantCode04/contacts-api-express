# Contacts API - Express.js

This is a **RESTful Contacts API** built with **Express.js**. The application allows for creating, reading, updating, and deleting (CRUD) contacts and user records. It uses a modular structure to separate concerns like database configuration, controllers, models, and middleware.

## Features

- **User and Contact Management**: Create, read, update, and delete users and contacts.
- **Modular Code Structure**: Organized into controllers, models, routes, and middleware for easy scalability.
- **Error Handling Middleware**: Custom error handling to manage application errors.
- **Environment Variables**: Sensitive information like database credentials is stored in an `.env` file.
  
## Project Structure

```bash
├── config                  # Database configuration
│   └── db.js               # MongoDB connection setup
├── controller              # Business logic controllers
│   ├── contact.controller.js # Controller for contact operations
│   └── user.controller.js    # Controller for user operations
├── middleware              # Middlewares for error handling and validation
│   ├── error.constants.js    # Error constants
│   ├── error.middleware.js   # Global error handling middleware
│   └── validate.middleware.js# Validation middleware for incoming requests
├── models                  # Data models for MongoDB
│   ├── contact.model.js      # Contact schema and model
│   └── user.model.js         # User schema and model
├── routes                  # API routes
│   ├── contact.routes.js     # Routes for contact-related operations
│   └── user.routes.js        # Routes for user-related operations
├── .env                    # Environment variables (ignored in .gitignore)
├── .gitignore              # Files and directories to ignore in Git
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Locked dependencies versions
├── README.md               # Project documentation (this file)
└── server.js               # Entry point of the application
