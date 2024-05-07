import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';

const ComponentPage = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="m-8 ">
      <button onClick={openForm} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 float-left">Build Component</button>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <Form onClose={closeForm} />
          </div>
        </div>
      )}
      <Table />
    </div>
  );
};

export default ComponentPage;