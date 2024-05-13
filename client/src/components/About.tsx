import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-8 mt-14">
      <h1 className="text-3xl font-bold mb-4 text-white">Choose a Plan</h1>

      <div className="flex justify-center">
        {/* Pricing Plan Card - Basic */}
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs">
          <h2 className="text-xl font-bold mb-4">Basic Plan</h2>
          <p className="text-gray-700 mb-4">Perfect for individuals</p>
          <p className="text-2xl font-bold text-blue-500 mb-4">$9.99 / month</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Choose Plan
          </button>
        </div>

        {/* Pricing Plan Card - Pro */}
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs">
          <h2 className="text-xl font-bold mb-4">Pro Plan</h2>
          <p className="text-gray-700 mb-4">Best for small businesses</p>
          <p className="text-2xl font-bold text-blue-500 mb-4">$29.99 / month</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Choose Plan
          </button>
        </div>

        {/* Pricing Plan Card - Enterprise */}
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs">
          <h2 className="text-xl font-bold mb-4">Enterprise Plan</h2>
          <p className="text-gray-700 mb-4">Ideal for large organizations</p>
          <p className="text-2xl font-bold text-blue-500 mb-4">$99.99 / month</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
