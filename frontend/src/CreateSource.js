// // src/components/CreateSource.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button, TextField } from '@mui/material';

// const CreateSource = ({ onSourceCreated }) => {
//   const [newSource, setNewSource] = useState({
//     name: '',
//     organization: '',
//     email: '',
//     phone: '',
//     notes: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewSource({ ...newSource, [name]: value });
//   };

//   const handleCreateSource = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/sources', newSource);
//       onSourceCreated(response.data);
//       setNewSource({
//         name: '',
//         organization: '',
//         email: '',
//         phone: '',
//         notes: '',
//       });
//     } catch (error) {
//       console.error('Error creating source:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create New Source</h2>
//       <TextField
//         label="Name"
//         name="name"
//         value={newSource.name}
//         onChange={handleInputChange}
//       />
//       {/* Add similar TextFields for other fields */}
//       <Button variant="contained" color="primary" onClick={handleCreateSource}>
//         Create Source
//       </Button>
//     </div>
//   );
// };

// export default CreateSource;
// Example usage in another component
import React from 'react';
import CreateEntity from './CreateEntity';

const CreateSource = () => {
  // Fields for the "Source" entity
  const sourceFields = ['name', 'organization', 'email', 'phone', 'notes'];

  const handleSourceCreated = (newSource) => {
    // Handle the created source
    console.log('New Source:', newSource);
  };

  return <CreateEntity entityName="sources" fields={sourceFields} onEntityCreated={handleSourceCreated} />;
};

export default CreateSource;
