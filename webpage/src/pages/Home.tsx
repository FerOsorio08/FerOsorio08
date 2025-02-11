import React from "react";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to the Home Page</h1>
            <a href="/about" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Go to About
            </a>
        </div>
    );
};

export default Home;
