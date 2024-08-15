require('dotenv').config();  // Load environment variables

const app = require('./app');
const connectDB = require('./config/db');  // Import the DB connection function

// Connect to the database
connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
