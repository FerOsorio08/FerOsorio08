import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./pages/Home";
import About from "./pages/About";
import path from "path";

const app = express();
const PORT = 3000;

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, "../public")));

// Function to render TSX pages
const renderPage = (Component: React.FC) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My App</title>
        <link href="/styles.css" rel="stylesheet">
      </head>
    <body class="bg-gray-100 text-gray-900">
        <div id="root">${renderToString(React.createElement(Component))}</div>
    </body>
    </html>`;
};

// Routes for pages
app.get("/", (_, res) => res.send(renderPage(Home)));
app.get("/about", (_, res) => res.send(renderPage(About)));

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
