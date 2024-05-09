const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const dataFilePath = path.join(__dirname, 'data.json');
// Middleware to read existing data from data.json
const readExistingData = (callback) => {
  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return callback(null, []); // Return empty array if file doesn't exist
      }
      return callback(err); // Return error for other file read errors
    }

    try {
      const existingData = JSON.parse(data);
      if (!Array.isArray(existingData)) {
        throw new Error('Existing data is not an array');
      }
      callback(null, existingData);
    } catch (parseError) {
      if (parseError instanceof SyntaxError) {
        // Handle case where JSON parsing fails due to empty file or invalid JSON
        callback(null, []); // Return empty array if JSON parsing fails
      } else {
        callback(parseError); // Propagate other parse errors
      }
    }
  });
};


// Middleware to save data to data.json
const saveData = (data, callback) => {
  readExistingData((err, existingData) => {
    if (err) {
      return callback(err);
    }

    const newData = { ...data, id: existingData.length + 1 }; // Assign auto-incrementing ID
    existingData.push(newData);

    fs.writeFile(dataFilePath, JSON.stringify(existingData), (writeErr) => {
      if (writeErr) {
        return callback(writeErr);
      }
      callback(null);
    });
  });
};

// POST endpoint to save form data to data.json
app.post('/api/saveFormData', (req, res) => {
  const formData = req.body;
  console.log(formData);

  saveData(formData, (err) => {
    if (err) {
      console.error('Error saving form data:', err);
      return res.status(500).send('Error saving form data');
    }
    res.sendStatus(200);
  });
});

// GET endpoint to retrieve and return form data from data.json
app.get('/api/getFormData', (req, res) => {
  readExistingData((err, existingData) => {
    if (err) {
      console.error('Error reading existing data:', err);
      return res.status(500).send('Error fetching form data');
    }
    res.json(existingData);
  });
});

// GET endpoint to retrieve and return raw contents of data.json
app.get('/api/getDataJson', (req, res) => {
  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.error('Error reading data.json:', err);
      return res.status(500).send('Error fetching data.json');
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

//api for fetch data for itemdetails

app.get('/api/getDataJson/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.error('Error reading data.json:', err);
      return res.status(500).send('Error fetching data.json');
    }

    try {
      const items = JSON.parse(data);

      // Find the item with matching ID
      const item = items.find((item) => item.id === Number(itemId));

      if (!item) {
        return res.status(404).send('Item not found');
      }

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(item));
    } catch (error) {
      console.error('Error parsing JSON data:', error);
      res.status(500).send('Error fetching item details');
    }
  });
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// const dataFilePath = path.join(__dirname, 'data.json');

// // Middleware to read existing data from data.json
// const readExistingData = (callback) => {
//   fs.readFile(dataFilePath, (err, data) => {
//     if (err) {
//       if (err.code === 'ENOENT') {
//         return callback(null, []); // Return empty array if file doesn't exist
//       }
//       return callback(err); // Return error for other file read errors
//     }

//     try {
//       const existingData = JSON.parse(data);
//       if (!Array.isArray(existingData)) {
//         throw new Error('Existing data is not an array');
//       }
//       callback(null, existingData);
//     } catch (parseError) {
//       if (parseError instanceof SyntaxError) {
//         // Handle case where JSON parsing fails due to empty file or invalid JSON
//         callback(null, []); // Return empty array if JSON parsing fails
//       } else {
//         callback(parseError); // Propagate other parse errors
//       }
//     }
//   });
// };

// // Middleware to save data to data.json
// const saveData = (formData, callback) => {
//   readExistingData((err, existingData) => {
//     if (err) {
//       return callback(err);
//     }

//     // Construct new item with auto-incrementing ID
//     const newItem = {
//       id: existingData.length + 1,
//       titles: formData.titles || [],
//       headings: formData.headings || [],
//       code: formData.code || []
//     };

//     // Push new item to existing data
//     existingData.push(newItem);

//     // Write updated data back to file
//     fs.writeFile(dataFilePath, JSON.stringify(existingData), (writeErr) => {
//       if (writeErr) {
//         return callback(writeErr);
//       }
//       callback(null);
//     });
//   });
// };

// // POST endpoint to save form data to data.json
// app.post('/api/saveFormData', (req, res) => {
//   const formData = req.body;
//   saveData(formData, (err) => {
//     if (err) {
//       console.error('Error saving form data:', err);
//       return res.status(500).send('Error saving form data');
//     }
//     res.sendStatus(200);
//   });
// });

// // GET endpoint to retrieve and return form data from data.json
// app.get('/api/getFormData', (req, res) => {
//   readExistingData((err, existingData) => {
//     if (err) {
//       console.error('Error reading existing data:', err);
//       return res.status(500).send('Error fetching form data');
//     }
//     res.json(existingData);
//   });
// });

// // GET endpoint to retrieve and return raw contents of data.json
// app.get('/api/getDataJson', (req, res) => {
//   fs.readFile(dataFilePath, (err, data) => {
//     if (err) {
//       console.error('Error reading data.json:', err);
//       return res.status(500).send('Error fetching data.json');
//     }
//     res.setHeader('Content-Type', 'application/json');
//     res.send(data);
//   });
// });

// // GET endpoint to retrieve and return item details by ID
// app.get('/api/getDataJson/:itemId', (req, res) => {
//   const itemId = req.params.itemId;

//   readExistingData((err, existingData) => {
//     if (err) {
//       console.error('Error reading data.json:', err);
//       return res.status(500).send('Error fetching data.json');
//     }

//     // Find the item with matching ID
//     const item = existingData.find((item) => item.id === Number(itemId));

//     if (!item) {
//       return res.status(404).send('Item not found');
//     }

//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(item));
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });