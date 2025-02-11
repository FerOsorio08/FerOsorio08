const express = require("express");
const app = express();
const PORT = 8000;

// Serve static files from the 'public' folder
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
