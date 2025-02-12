import React from "react";


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to the Home Page
      </h1>
      <a
        href="/about"
        className="mt-4 px-4 py-2 bg-teal-FU text-white rounded hover:bg-teal-dark"
      >
        Go to About
      </a>
      {/* <div className="relative w-full h-0 pt-[56.2225%] shadow-md mt-6 mb-4 overflow-hidden rounded-lg will-change-transform">
        <iframe
          loading="lazy"
          className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
          src="https://www.canva.com/design/DAGe2DG0BsA/hB8fsHQY5vojbRCnAFUVqg/view?embed"
          allowFullScreen
          allow="fullscreen"
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAGe2DG0BsA/hB8fsHQY5vojbRCnAFUVqg/view?utm_content=DAGe2DG0BsA&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Maria Fernanda Osorio Arroyo
      </a> */}
    </div>
  );
};

export default Home;
