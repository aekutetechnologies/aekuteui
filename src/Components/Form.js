import React, { useState } from 'react';

const Form = ({ onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        heading: '',
        code: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const existingFormDataString = localStorage.getItem('formData');
        let existingFormData = [];

        try {

            existingFormData = existingFormDataString ? JSON.parse(existingFormDataString) : [];


            if (!Array.isArray(existingFormData)) {
                console.error('Existing form data is not an array:', existingFormData);
                existingFormData = [];
            }
        } catch (error) {
            console.error('Error parsing existing form data:', error);
            existingFormData = [];
        }


        const newFormData = {
            id: new Date().getTime(),
            ...formData
        };


        const updatedFormData = [...existingFormData, newFormData];

       
        localStorage.setItem('formData', JSON.stringify(updatedFormData));

       
        setFormData({
            title: '',
            heading: '',
            code: '',

        });

        onClose(); 
        alert('Form data saved successfully!');
    };

    const handleCancel = () => {
        setFormData({
            title: '',
            heading: '',
            code: '',

        });
        onClose(); 
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Form Data</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">Title:</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">Heading:</label>
                        <input type="text" name="heading" value={formData.heading} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">Code:</label>
                        <input type="text" name="code" value={formData.code} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
                        <button type="button" onClick={handleCancel} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
