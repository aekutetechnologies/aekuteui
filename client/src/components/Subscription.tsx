import React from "react";

const Subscription: React.FC = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-3xl font-bold ">Subscribe Here for free components</h1>
      <form className="max-w-md mx-auto mt-8 " autoComplete="off">
        <div className="grid grid-cols-1 gap-4 w-[400px]">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="px-4 py-2 border rounded-md"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="px-4 py-2 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-4 py-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscription;
