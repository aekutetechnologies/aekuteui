import React, { useEffect, useState } from 'react';

const Table = () => {
    const [formDataList, setFormDataList] = useState([]);

    useEffect(() => {

        const existingFormDataString = localStorage.getItem('formData');
        
        if (existingFormDataString) {
            try {
                const existingFormData = JSON.parse(existingFormDataString);
                setFormDataList(existingFormData);
            } catch (error) {
                console.error('Error parsing existing form data:', error);
            }
        }
    }, []); 

    const handleDownloadJson = () => {

        const jsonData = JSON.stringify(formDataList, null, 2);


        const blob = new Blob([jsonData], { type: 'application/json' });


        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'formData.json';
        a.click();

        URL.revokeObjectURL(url);
    };

    const handleDeleteRow = (id) => {
        const updatedFormDataList = formDataList.filter(formData => formData.id !== id);
        setFormDataList(updatedFormDataList);
        localStorage.setItem('formData', JSON.stringify(updatedFormDataList));
    };


    return (
        <div className='mt-20'>
            <h2 className="text-2xl font-bold mb-4">Form Data Table</h2>
            <button onClick={handleDownloadJson} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4 float-start">
                Download All Data as JSON
            </button>
            <table className="w-full border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-400 px-4 py-2">ID</th>
                        <th className="border border-gray-400 px-4 py-2">Title</th>
                        <th className="border border-gray-400 px-4 py-2">Heading</th>
                        <th className="border border-gray-400 px-4 py-2">Code</th>
                        <th className="border border-gray-400 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {formDataList.map((formData) => (
                        <tr key={formData.id}>
                            <td className="border border-gray-400 px-4 py-2">{formData.id}</td>
                            <td className="border border-gray-400 px-4 py-2">{formData.title}</td>
                            <td className="border border-gray-400 px-4 py-2">{formData.heading}</td>
                            <td className="border border-gray-400 px-4 py-2">{formData.code}</td>
                            <td className="border border-gray-400 px-4 py-2">
                                <button
                                    onClick={() => handleDeleteRow(formData.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
        </div>
    );
};

export default Table;