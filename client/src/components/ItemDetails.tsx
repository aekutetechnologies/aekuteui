import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";

interface DataItem {
  id: number;
  title: string;
  heading: string;
  code: string;
  // Add other properties as needed
}

const ItemDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>(); // Use 'name' instead of 'itemId'
  const [item, setItem] = useState<DataItem | null>(null);

useEffect(() => {
  const fetchItemData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/getItemByComponentName/${name}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch item details: ${response.statusText}`);
      }
      const itemData: DataItem = await response.json();
      setItem(itemData);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  fetchItemData();
}, [name]);


  return (
    <div className="mt-20">
      {item ? (
        <div className="container mx-auto">
          <h3 className="font-bold text-4xl ">{item.title} Components</h3>
          <h3 className="font-bold text-2xl mt-5">{item.heading}</h3>
          <button className="mt-5 bg-gray-800 text-white px-5 py-2">View</button>

          <div className="container h-56 mt-5 rounded-lg border-2 shadow-2xl">
            <Editor
              defaultLanguage="javascript"
              theme="vs-dark"
              defaultValue={item.code}
            />
          </div>
          {/* Display other properties of the item */}
        </div>
      ) : (
        <p>Loading item details...</p>
      )}
    </div>
  );
};

export default ItemDetails;
