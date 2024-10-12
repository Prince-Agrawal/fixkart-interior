server/
│
├── node_modules/           # Installed npm packages
│
├── src/                    # Source code directory
│   ├── config/             # Configuration files (e.g., database, environment)
│   │   └── db.js           # Database configuration
│   │
│   ├── controllers/        # Route controllers
│   │   └── userController.js
│   │
│   ├── models/             # Database models (e.g., Mongoose models)
│   │   └── userModel.js
│   │
│   ├── routes/             # Express route definitions
│   │   └── userRoutes.js
│   │
│   ├── middlewares/        # Custom middleware functions
│   │   └── authMiddleware.js
│   │
│   ├── services/           # Business logic and services
│   │   └── userService.js
│   │
│   ├── utils/              # Utility functions
│   │   └── helpers.js
│   │
│   ├── app.js              # Main Express application setup
│   └── server.js           # Server start script
│
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation


## Backend Deployment Steps

1. **Subdomain Setup**: 
   - Go to the 'Domains' section in cPanel and create a subdomain for deploying the backend (e.g., `api.baseurl.com`).
   
2. **Node.js App Creation**:
   - Search for 'Node.js' in cPanel and create a Node.js app by selecting the version, directory, and domain from the list.

3. **Environment Variables**:
   - Use the Node.js app panel to provide the required environment variables.

4. **Code Upload**-lock:
   - Upload the backend code to the selected directory path. **Important**: Do not upload the `node_modules`, `package.json`, or `.env` files.

5. **Install Dependencies**:
   - From the Node.js app panel, run `npm install` to install the required dependencies.

6. **Restarting Node App**:
   - After any server-side changes, restart the Node.js app to apply the updates.