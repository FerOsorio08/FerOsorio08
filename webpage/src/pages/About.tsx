import React from "react";

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
            <h1 className="text-4xl font-bold text-green-600">About Page</h1>
            <a href="/" className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
                Go to Home
            </a>
        </div>
    );
};

export default About;
