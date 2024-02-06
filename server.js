const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Pubilc files
app.use(express.static('src'));

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
